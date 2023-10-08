import React, {ChangeEvent, useState} from 'react';
import Image from "next/image";
import Input from "@/components/UI/Input";
import Button from "@/components/UI/Button";
import {check, x} from "@/components/UI/icons";
import PhotoService from "@/services/PhotoService";

const EditorMode = ({src, label, id, changeLabel, onClose}: {
    src: string,
    label: string,
    id: string,
    changeLabel: (newLabel: string) => void,
    onClose: () => void
}) => {

    const [newLabel, setNewLabel] = useState(label)

    function currentColor(length: number) {
        if (length === 0) {
            return 'text-primary-500'
        }
        if (length <= 50) {
            return 'text-green-600'
        }
        if (length < 80) {
            return 'text-yellow-600'
        }
        if (length >= 80) {
            return 'text-red-600'
        }
    }

    async function handleSave() {
        if (newLabel === label) {
            return 0
        }
        const changing = await PhotoService.changeLabel(id, newLabel)
        if (changing.status === 200) {
            changeLabel(newLabel)
            onClose()
        } else {

        }
    }


    return (
        <div className='flex flex-col gap-10 items-center relative'>

            <p className='text-primary-900 font-semibold tracking-tighter text-[28px] leading-7'>Set
                custom label</p>
            <div className='flex flex-col gap-5'>
                <Image
                    alt={'image'}
                    width={335}
                    height={200}
                    className='
                                   h-[200px]
                                   w-cardLarge
                                   object-cover
                                   object-center
                                   rounded-xl
                                   select-none
                                   pointer-events-none
                                '
                    src={src}/>
                <div className='flex flex-col text-center justify-center gap-[10px] items-center '>
                    <Input type={"text"}
                           value={newLabel}
                           autoComplete='off'
                           name={'label'}
                           className='p-0 focus:outline-none w-36 bg-inherit focus:placeholder:opacity-80'
                           maxLength={100}
                           placeholder={'Enter custom label'} error={false}
                           onChange={(e: ChangeEvent<HTMLInputElement>) => setNewLabel(e.target.value)}/>
                    <p className={`text-xs transition-all ${currentColor(newLabel.length)} relative`}>{newLabel.length ? 100 - newLabel.length + ' left' : '100 chars max'}
                    </p>
                </div>
            </div>
            <Button startIcon={check}
                    className='hover:text-green-600 transition-all'
                    onClick={() => handleSave()}
            >Save</Button>

            <div className='fixed right-4 top-4 sm:right-12 sm:top-12'><Button startIcon={x}
                                                                               className='hover:text-red-600'
                                                                               onClick={onClose}>Close editor</Button>
            </div>
        </div>

    );
};

export default EditorMode;