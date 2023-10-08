import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface IAlert {
    opened: boolean;
    time?: number;
    children: React.ReactNode;
}

const Alert = ({ opened, time = 5000, children }: IAlert) => {
    const [mounted, setMounted] = useState(opened);

    useEffect(() => {
        if (opened && time > 0) {
            const timeoutId = setTimeout(() => {
                setMounted(false);
            }, time);

            return () => {
                clearTimeout(timeoutId);
            };
        } else {
            setMounted(opened);
        }
    }, [opened, time]);

    if (!mounted) {
        return null;
    }

    return (
        <motion.div
            className='flex flex-col gap-[5px] align-middle fixed sm:bottom-12 sm:right-12 bg-primary-100 border-1 p-5 border-primary-200 rounded-[10px] shadow-alert z-[9999]'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            <div className='text-[#E3170A] font-bold text-[15px] leading-[18.75px]'>
                Sorry, but
            </div>
            <div className='text-primary-900 text-[15px] leading-[18.75px] w-[280px]'>
                {children}
            </div>
        </motion.div>
    );
};

export default Alert;
