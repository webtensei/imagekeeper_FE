import React from 'react';
import Navbar from "@/components/Navigation/Navbar";
import DragnDrop from "@/components/DragnDrop";

const Layout = ({children}: {
    children: React.ReactNode
}) => {
    return (
        <>
            <DragnDrop>
                <Navbar/>
                {children}

            </DragnDrop>
            <div id='modal' className=''>

            </div>
        </>

    );
};

export default Layout;