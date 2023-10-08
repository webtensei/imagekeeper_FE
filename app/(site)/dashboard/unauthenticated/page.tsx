"use client";
import React, {useEffect, useState} from 'react';
import Input from "@/components/UI/Input";
import Button from "@/components/UI/Button";
import {auth} from "@/components/UI/icons";
import cookieCutter from "cookie-cutter";
import {motion, useAnimation} from "framer-motion";
import {redirect} from "next/navigation";

const Page = () => {
    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState(false)
    const buttonControl = useAnimation()
    const inputControl = useAnimation()
    const [registrationState, setRegistrationState] = useState(false)
    const isMobile =   typeof window === 'object' && window.innerWidth < 640

    function handleSubmit() {
        if (!/\S+@\S+\.\S+/.test(email)) {
            return setEmailError(true);
        }
        cookieCutter.set('username', `${email}`)
        setRegistrationState(true)
        return 0
    }


    useEffect(() => {
        if (cookieCutter.get('username')) {
            redirect('/')
        }
    }, [])
    useEffect(() => {
        if (cookieCutter.get('username')) {
            redirect('/')
        }
    }, [registrationState])


    useEffect(() => {
        async function animate() {
            buttonControl.start({
                opacity: 1,
                scale: 1,
                transition: {duration: 1}
            })
            await buttonControl.start({
                x: 0,
                transition: {duration: 0.5, delay: 1}
            })
            await inputControl.start({
                opacity: 1, scale: 1, x: 0,
                transition: {duration: 0.5}
            })

        }

        animate()

    }, [])

    return (
        <div className='flex flex-col sm:flex-row gap-3  min-h-screen  justify-center items-center'>
            <motion.div initial={{opacity: 0, scale: 0.8, x: -30}} animate={inputControl}>
                <Input
                    type={'text'}
                    label={'Enter your email'}
                    value={email}
                    name={'email'}
                    placeholder={'try: webtensei@gmail.com'}
                    error={emailError}
                    onFocus={() => {
                        setEmailError(false)
                    }}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                /></motion.div>
            <motion.div initial={{opacity: 0, x: isMobile ? 0 : -100, scale: isMobile ? 0.8 : 1}}
                        animate={buttonControl}>
                <Button disabled={emailError} startIcon={auth} className='w-[244px] sm:w-auto'
                        onClick={handleSubmit}>Authenticate</Button>
            </motion.div>
        </div>
    );
};

export default Page;