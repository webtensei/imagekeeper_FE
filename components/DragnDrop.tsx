'use client';
import {cloudUpload} from "@/components/UI/icons";
import Portal from "@/components/Portal";
import React, {useRef, useState} from "react";
import {createUpload, createUploadZone, increaseIndicatorLength} from "@/utils/uploadHelpers";
import PhotoService from "@/services/PhotoService";
import cookieCutter from 'cookie-cutter'
const DragnDrop = ({ children }: { children: React.ReactNode }) => {
    const [isDragging, setIsDragging] = useState(false);
    const dragArea = useRef<HTMLDivElement | null>(null);
    const dragModal = useRef<HTMLDivElement | null>(null);
    const enterCounter = useRef(0); // Счетчик для отслеживания событий dragenter/dragleave

    const onDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();

        if (e.type === "dragenter" || e.type === "dragover") {
            if (enterCounter.current === 0) {
                setIsDragging(true);
                if (dragArea.current && dragModal.current) {
                    dragArea.current.className = "blur-md";
                    dragModal.current.className =
                        "fixed top-0 left-0 bottom-0 right-0 z-50 flex flex-col justify-center items-center bg-white/80";
                }
            }
            enterCounter.current++;
        } else if (e.type === "dragleave") {
            enterCounter.current--;
            if (enterCounter.current === 0) {
                setIsDragging(false);
                if (dragArea.current && dragModal.current) {
                    dragArea.current.className = "";
                    dragModal.current.className = "hidden";
                }
            }
        }
    };

    const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();

        const droppedFiles = e.dataTransfer.files;

        const imageFiles = Array.from(droppedFiles).filter((file) =>
            file.type.startsWith("image/")
        );

        if (imageFiles.length > 0) {
            if (window.location.toString().includes("new")) {
                const promises = imageFiles.map((image) => {
                    const formData = new FormData();
                    formData.append('image', image);
                    formData.append('author', `${cookieCutter.get('username',{path:'/'})}`);
                    return PhotoService.postPhoto(formData);
                });

                Promise.all(promises)
                    .then(() => {
                        window.location.href = '/'
                    })
                    .catch((e) => {
                        console.log(e)
                    });
            }
            let currentMonth: NodeListOf<Element> | null = null;

            if (typeof document !== 'undefined') {
                currentMonth = document.querySelectorAll('[data-currmnth="true"]');
            }

            if (!currentMonth || currentMonth.length === 0) {
                createUploadZone();
                currentMonth = document.querySelectorAll('[data-currmnth="true"]');
            }

            if (currentMonth && currentMonth.length > 0) {
                imageFiles.forEach((image) => {
                    increaseIndicatorLength();
                    createUpload({ currentMonth: currentMonth as NodeListOf<Element>, image });
                });
            } else {
            }

        }


        setIsDragging(false);
        enterCounter.current = 0;

    };

    return (
        <main
            className={`min-h-screen ${isDragging ? "blur-md" : ""}`}
            ref={dragArea}
            onDragEnter={(e: React.DragEvent<HTMLDivElement>) => onDragEnter(e)}
            onDragLeave={(e: React.DragEvent<HTMLDivElement>) => onDragEnter(e)}
            onDragOver={(e: React.DragEvent<HTMLDivElement>) => e.preventDefault()}
            onDrop={(e: React.DragEvent<HTMLDivElement>) => onDrop(e)}
        >
            {children}
            <Portal>
                <div
                    ref={dragModal}
                    className={isDragging ? "fixed top-0 left-0 bottom-0 right-0 z-50 flex flex-col justify-center items-center bg-white/80" : "hidden"}
                >
                    <div className="fixed w-full h-full top-0 left-0 right-0 bottom-0 z-[2]" />
                    <div className="box-border z-[9999]  flex flex-col gap-4 text-center items-center">
                        <p className="text-helpers-green">
                            {cloudUpload(80, 65, "currentColor")}
                        </p>
                        <p className="text-primary-900  font-bold text-3xl">Upload file</p>
                        <p className="text-primary-500 text-base">
                            Drop your image here to start uploading
                        </p>
                    </div>
                </div>
            </Portal>
        </main>
    );
};

export default DragnDrop;
