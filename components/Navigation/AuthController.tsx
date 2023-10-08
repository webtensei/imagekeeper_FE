"use client";
import React from 'react';
import Button from "@/components/UI/Button";
import cookieCutter from "cookie-cutter";
import {auth} from "@/components/UI/icons";
import {redirect} from "next/navigation";

const AuthController = () => {


    // Better way: use Auth Provider, but it's only mock))
    if (!cookieCutter.get('username')) {
        redirect('/dashboard/unauthenticated')
    }

    function logout() {
        // тут описан метод удаления кук, ну. больше не потащу такие библиотеки никогда =)  https://www.npmjs.com/package/@boiseitguru/cookie-cutter
        cookieCutter.set('username', '',{expiresIn:new Date(0),path:'/dashboard'})
        window.location.href = '/dashboard/unauthenticated'
    }


    return (

        <>
            <Button className='hidden sm:flex hover:text-red-600' onClick={logout} startIcon={auth}>
                {cookieCutter.get('username')}
            </Button>
        </>
    );
};

export default AuthController;