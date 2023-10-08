import React from 'react';

const IGSkeleton = () => {
    return (
        <div className='mb-20 animate-pulse mt-12 px-2 lg:px-12'>
            <div className=' h-[29px] w-[215px] bg-primary-200 sm:px-0 rounded-[10px]'/>
            <div className='mt-[40px] flex  sm:justify-start flex-wrap gap-[15px]'>

                <div className='w-[335px] h-[200px] bg-primary-200 rounded-xl'/>
                <div className='w-[335px] h-[200px] bg-primary-200 rounded-xl'/>
                <div className='w-[150px] h-[200px] bg-primary-200 rounded-xl'/>
                <div className='w-[335px] h-[200px] bg-primary-200 rounded-xl'/>
                <div className='w-[150px] h-[200px] bg-primary-200 rounded-xl'/>

            </div>
        </div>
    );
};

export default IGSkeleton;