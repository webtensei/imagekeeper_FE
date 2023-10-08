import React, {FC, useRef, useState} from 'react';
import Button from "@/components/UI/Button";
import {del, download, edit} from "@/components/UI/icons";
import Image from "next/image";
import PhotoService from "@/services/PhotoService";
import {Modal} from "@/components/ComplexAnimatedModal/Modal";
import EditorMode from "@/components/Card/EditorMode";
import {formatToDayMonth} from "@/utils/formatDate";
import { motion, useAnimation} from "framer-motion";
import axios from "axios";
import {v4} from 'uuid'
export interface ImageProps {
    width: 'cardLarge' | 'cardLittle',
    src: string,
    label: string,
    date: number
    id: string,
    _id?: string
}

const Card: FC<ImageProps> = ({label, src, date, width, id}) => {
    const [isUnmounted, setIsUnmounted] = useState<boolean>(false)

    const [changingMode, setChangingMode] = useState<boolean>(false)

    const cardRef = useRef<HTMLDivElement | null>(null);

    const cardControl = useAnimation()

    const [cardLabel, setCardLabel] = useState<string>(label)

    const handleDelete = async () => {
        const deleted = await PhotoService.deletePhoto(id);
        if (deleted.status === 204) {
            cardControl.start({
                opacity: 0,
                scale: 0.8,
            })
            setTimeout(() => {
                setIsUnmounted(true);
            }, 300);
        }
    };
    const handleDownload = () => {

        axios({
            method: 'get',
            url: src,
            responseType: 'blob',
        })
            .then((response) => {
                const url = window.URL.createObjectURL(new Blob([response.data]));
                const a = document.createElement('a');

                a.href = url;
                a.download = `${v4()}.jpg`;
                a.style.display = 'none';
                document.body.appendChild(a);
                a.click();
                window.URL.revokeObjectURL(url);
            })
            .catch((error) => {
                console.log(error)
            });
    };

    if (isUnmounted) {
        return null;
    }
    return (
        <motion.div animate={cardControl} transition={{duration: 0.5}} data-id={id} ref={cardRef}
                    className={` flex h-[215px] relative  w-${width}`}
        >
            <div
                data-label={id}
                className='
                 absolute
                 right-2.5
                 top-0
                 z-[10]
                 pointer-events-none
                 bg-helpers-yellow
                 text-xs
                 text-primary-900
                 p-[5px]
                 rounded-md
                 max-w-[100px]

                 '>
                <p className='break-words hyphens-auto'>{cardLabel || formatToDayMonth(date)}</p>
            </div>
            <div
                className='
                 absolute
                 bottom-0
                 w-full
                 h-[200px]
                 bg-inherit
                 rounded-xl
                 group
                 '>
                <div className='
                opacity-0
                absolute
                bg-primary-shadow900
                w-full
                h-full
                rounded-xl
                transition-all
                group-hover:opacity-100
                z-[3]
                '>
                </div>
                <div
                    className='
                    opacity-0
                    absolute
                    flex
                    flex-col-reverse
                    z-[4]
                    w-full
                    h-full
                    rounded-xl
                    p-4
                    group-hover:opacity-100
                    text-helpers-yellow
                    gap-y-4
                    items-start'
                >
                    <Button startIcon={del}
                            className='p-0 bg-inherit text-helpers-yellow gap-x-[6px] hover:text-red-600 '
                            onClick={handleDelete}>Delete</Button>
                    <Button startIcon={edit}
                            className='p-0 bg-inherit text-helpers-yellow gap-x-[6px] hover:text-helpers-green'
                            onClick={() => setChangingMode(!changingMode)}>Edit label</Button>
                    <Button startIcon={download}
                            onClick={handleDownload}
                            className='p-0 bg-inherit text-helpers-yellow gap-x-[6px] hover:text-helpers-green'>Download</Button>
                    <Modal opened={changingMode} onClose={() => setChangingMode(false)}>
                        <EditorMode src={src} label={cardLabel} changeLabel={setCardLabel}
                                    onClose={() => setChangingMode(false)} id={id}/>
                    </Modal>
                </div>
                <Image
                    alt={'image'}
                    fill
                    sizes='100%'
                    loading={"lazy"}
                    className={`
                        h-[200px]
                        w-auto
                        object-cover
                        object-center
                        rounded-xl
                        select-none
                        pointer-events-none
                        `}

                    src={src}/>
            </div>

        </motion.div>

    );
};

export default React.memo(Card);