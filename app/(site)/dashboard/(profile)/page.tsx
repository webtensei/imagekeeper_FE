'use client';
import ImageGroup from "@/components/ImageGroup";
import UseInViewAnimation from "@/hooks/useInViewAnimation";
import {formatTimestamp} from "@/utils/formatDate";
import {useEffect, useState} from "react";
import PhotoService from "@/services/PhotoService";
import cookieCutter from 'cookie-cutter'
import IGSkeleton from "@/components/IGSkeleton";
import {AxiosError} from "axios";
import Alert from "@/components/UI/Alert";

const Page = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [imageData, setImageData] = useState<ImageGroup[]>([])
    const [errorOccurred, setErrorOccurred] = useState(false);

    async function fetchPhotos() {
        try {
            setIsLoading(true);
            const response = await PhotoService.fetchPhotos(cookieCutter.get('username'));
            if (response) {
                setImageData(response.data);

            }
        } catch (e) {
            setErrorOccurred(true);
            console.log('here is error')
            const axiosError = e as AxiosError;
            if (axiosError.response && axiosError.response.status === 400) {
                window.location.href = '/dashboard/new'
            }
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        if(!cookieCutter.get('username')){
            window.location.href = '/dashboard/unauthenticated'
        }
        void fetchPhotos();
    }, []);


    if (isLoading) {
        return <IGSkeleton/>
    }

    return (
        <section id='#content' className='mt-12 px-2 lg:px-12'>
            {
                imageData && imageData.map((el, index) => {
                    if (formatTimestamp(el.date) === formatTimestamp(Date.now() / 1000)) {
                        return <UseInViewAnimation key={index}><ImageGroup current={true} date={el.date}
                                                                           photos={el.photos}/></UseInViewAnimation>
                    }

                    return <UseInViewAnimation key={index}><ImageGroup date={el.date}
                                                                       photos={el.photos}/></UseInViewAnimation>
                })
            }
            {errorOccurred && (
                <Alert opened={true} time={10000}>
                    Sorry, an error occurred. Can`t load images from server, try again
                </Alert>
            )}
        </section>
    );
};

export default Page;