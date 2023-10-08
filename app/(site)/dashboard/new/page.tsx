"use client";
import React, {ChangeEvent, useEffect, useRef} from 'react';
import {motion} from "framer-motion";
import Button from "@/components/UI/Button";
import {cloudUpload} from "@/components/UI/icons";
import PhotoService from "@/services/PhotoService";
import cookieCutter from "cookie-cutter";
import {redirect} from "next/navigation";

const Page = () => {
    const inputFile = useRef<HTMLInputElement | null>(null);

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        const files = event.target.files;

        if (!files) return;

        const imageFiles = Array.from(files).filter((file) =>
            file.type.startsWith('image/')
        );

        if (imageFiles.length > 0) {
            const promises = imageFiles.map((image) => {
                const formData = new FormData();
                formData.append('image', image);
                formData.append('author', `${cookieCutter.get('username')}`);
                return PhotoService.postPhoto(formData);
            });

            Promise.all(promises)
                .then(() => {
                    window.location.href = '/'
                })
                .catch((error) => {
                    // Handle any errors if needed
                    console.error('Error uploading photos:', error);
                });
        }
    }
        useEffect(()=>{
            console.log('neeew')
            if(!cookieCutter.get('username',{path:'/'})){
                redirect('/dashboard/unauthenticated')
            }
        },[])
    return (
        <main
            className="fixed top-0 bottom-0 right-0 left-0 bg-white flex  min-h-[100vh] flex-col justify-center items-center">
            <div className="flex flex-col items-center text-center max-w-[400px] gap-[60px]">
                <motion.img
                    animate={{x: [0, -75, 75, 0], scale: [1, 1.3, 1.3, 1]}}
                    transition={{duration: 3}}
                    src="/assets/images/Logo.svg" alt='Image keeper!'/>
                <div className="tracking-tighter">
                    <h3 className="text-primary-900 font-bold text-3xl tracking-[-0.933px]">No images uploaded yet</h3>
                    <p className="text-primary-500 text-[15px] font-normal mt-[15px] mb-[30px] leading-[18.75px]">
                        Upload your first image by drag and dropping the file on the screen or click the button below
                    </p>
                    <>
                        <Button
                            onClick={() => inputFile.current && inputFile.current.click()}
                            startIcon={cloudUpload(24, 24, 'currentColor')}>
                            Upload image
                        </Button>
                        <input
                            className='hidden'
                            type='file'
                            onChange={handleChange}
                            ref={inputFile}
                            multiple
                            accept='image/*'
                        />
                    </>
                </div>
            </div>

        </main>

    );
};

export default Page;