import React from 'react';
import DragnDrop from "@/components/DragnDrop";

const Layout = ({children}: {
    children: React.ReactNode
}) => {
    return (
        <>
            <DragnDrop>
                {children}

            </DragnDrop>
            <div id='modal' className='z-[9999]'>
            </div>
        </>
    );
};

export default Layout;