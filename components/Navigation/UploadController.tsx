'use client';
import React, { useRef, ChangeEvent } from 'react';
import Button from "@/components/UI/Button";
import { cloudUpload } from "@/components/UI/icons";
import { createUpload, createUploadZone, increaseIndicatorLength } from "@/utils/uploadHelpers";

const UploadController: React.FC = () => {
    const inputFile = useRef<HTMLInputElement | null>(null);

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        const files = event.target.files;

        if (!files) return;

        const imageFiles = Array.from(files).filter((file) =>
            file.type.startsWith('image/')
        );

        if (imageFiles.length > 0) {
            let currentMonth = typeof document !== 'undefined' && document.querySelectorAll('[data-currmnth="true"]');

            if (!currentMonth || currentMonth.length === 0) {
                createUploadZone();
                currentMonth = typeof document !== 'undefined' && document.querySelectorAll('[data-currmnth="true"]');
            }

            if (currentMonth && currentMonth.length > 0) {
                imageFiles.forEach((image) => {
                    increaseIndicatorLength();
                    createUpload({ currentMonth: currentMonth as NodeListOf<Element>, image });
                });
            } else {
                // Handle the case when currentMonth is still empty
            }
        }
    }

    return (
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
                multiple // Allow multiple file selection
                accept='image/*' // Specify accepted file types
            />
        </>
    );
};

export default UploadController;
