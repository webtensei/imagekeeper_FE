import React from 'react';
import AuthController from "@/components/Navigation/AuthController";
import UploadController from "@/components/Navigation/UploadController";
import dynamic from "next/dynamic";

const Navbar = () => {


    return (
<>
    <nav className='
            flex
            justify-between
            w-full
            px-2
            py-3
            bg-white
            z-50
            border-b-2
            border-primary-200
            lg:px-12
            lg:pt-12
            lg:pb-6
            fixed
            top-0
            '>
        <div className='flex flex-col my-auto'>
            <img src="./assets/images/Logo.svg" alt='Image keeper!' />
            <p className='text-primary-500 tracking-tight text-xs '>12 images stored in keeper</p>
        </div>
        <div className='flex flex-row items-center gap-3'>
            <AuthController/>
            <UploadController/>
        </div>
    </nav>
<div className='h-20 sm:h-32 w-full '>

</div>
</>
    );
};

export default dynamic(() => Promise.resolve(Navbar), { ssr: false });