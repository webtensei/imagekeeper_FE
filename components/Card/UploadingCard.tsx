import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Card, { ImageProps } from '@/components/Card/Card';
import cookieCutter from "cookie-cutter";
import Alert from '@/components/UI/Alert';
import {API_URL} from "@/http";

const UploadingCard = ({ src, image }: { src: string; image: File }) => {
    const [percentage, setPercentage] = useState(0);
    const [total, setTotal] = useState(0);
    const [done, setDone] = useState(0);
    const [uploadSuccess, setUploadSuccess] = useState(false);
    const [responseData, setResponseData] = useState<ImageProps | null>(null);
    const [uploadError, setUploadError] = useState(false);

    useEffect(() => {
        const xhr = new XMLHttpRequest();

        xhr.upload.onprogress = (e) => {
            setDone(e.loaded);
            setTotal(e.total);
            const perc = (Math.floor((e.loaded / e.total) * 1000) / 10);
            setPercentage(perc);
        };

        const formData = new FormData();
        formData.append('image', image);
        formData.append('author', `${cookieCutter.get('username',{path:'/'})}`);

        xhr.open('POST', `${API_URL}/images`);

        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 201) {
                    setUploadSuccess(true);
                    const parsedResponse = JSON.parse(xhr.responseText);
                    setResponseData(parsedResponse);
                } else {
                    console.error('Upload failed');
                    setUploadError(true);
                }
            }
        };

        xhr.send(formData);

    }, []);

    if (uploadSuccess && responseData) {
        return (
            <Card
                label={responseData.label}
                src={src}
                date={responseData.date}
                width="cardLarge"
                id={responseData._id as string}
            />
        );
    }

    if (uploadError) {
        return (
            <div style={{ marginBottom: '20px' }}>
                <Alert opened={true}>
                    Oops! There was an error during upload. Please try again.
                </Alert>
            </div>
        );
    }

    return (
        <div className={`   flex h-[215px] relative   w-cardLarge    bg-inherit   rounded-xl   group   `}>
            <div className='
                 absolute
                 bottom-0
                 w-full
                 h-[200px]
                 bg-inherit
                 rounded-xl
                 group
                 '>
                <div className=' absolute w-full h-full z-50 select-none flex flex-col justify-center items-center'>
                    <p className='text-primary-900 text-xl font-semibold'>{uploadSuccess ? 'Uploaded' : 'Uploading'}</p>
                    <p className='text-xs text-gray-500 font-semibold'>{Math.round(done / 1024)}kb
                        of {Math.round(total / 1024)}kb</p>
                </div>
                <div className={`
                    opacity-60
                    absolute
                    bg-primary-200
                    h-full
                    rounded-l-xl
                    transition-all
                    z-40
                    rounded-xl
                    `}
                     style={{width: percentage + '%'}}
                >
                </div>
                <div className='
                            opacity-60
                            absolute
                            bg-primary-100
                            w-full
                            h-full
                            rounded-l-xl
                            transition-all
                            z-30
                            '>
                </div>
                <Image
                    alt={'image'}
                    width={335}
                    height={200}
                    loading={"lazy"}
                    className={`
                        h-[200px]
                        w-full
                        object-cover
                        object-center
                        rounded-xl
                        select-none
                        pointer-events-none
                        `}

                    src={src}/>
            </div>
        </div>

    );
};

export default UploadingCard;
