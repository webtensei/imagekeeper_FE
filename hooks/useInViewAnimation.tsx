'use client';
import React, {useRef} from 'react';
import {useInView} from "framer-motion";

const UseInViewAnimation = ({children}: { children: React.ReactNode }) => {
    const ref = useRef(null)
    const isInView = useInView(ref,{
        once:true
    })

    return (
        <div ref={ref} style={{
            transform: isInView ? "none" : "translateX(-25px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s"
        }}>
            {children}
        </div>
    );
};

export default UseInViewAnimation;