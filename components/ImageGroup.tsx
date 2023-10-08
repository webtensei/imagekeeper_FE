import React, {FC} from 'react';
import Card from "@/components/Card/Card";
import {formatTimestamp} from "@/utils/formatDate";
import {ImageGroup} from "@/models/response/ImageGroup";


const ImageGroup: FC<ImageGroup> = ({date, photos, current}) => {


    return (
        <div className='mb-20'>
            <div className='flex flex-row gap-4 px-[15px] sm:px-0 max-h-9 items-center '>
                <h3 className='text-primary-200 text-3xl font-bold'>{formatTimestamp(date)}</h3>
                <div
                    id={current ? '#currentAmount' : ''}
                    className='bg-helpers-green max-h-9 px-2.5 py-1.5 rounded-[10px]  text-xl text-white font-semibold'>{photos.length}</div>
            </div>

            <div data-currmnth={current || false}
                 className='mt-5 flex justify-center sm:justify-start flex-wrap gap-[15px]'>


                {/*change keys on image src*/}
                {photos &&
                    photos
                        .slice() // Создаем копию массива photos
                        .reverse()
                        .map((el, index) => {
                            if (index === 0) {
                                return (
                                    <Card
                                        key={el.src}
                                        id={el._id}
                                        date={el.date}
                                        label={el.label}
                                        src={el.src}
                                        width="cardLarge"
                                    />
                                );
                            }
                            if (index === 8) {
                                return (
                                    <Card
                                        key={el.src}
                                        id={el._id}
                                        date={el.date}
                                        label={el.label}
                                        src={el.src}
                                        width="cardLarge"
                                    />
                                );
                            }
                            return (
                                <Card
                                    key={el.src}
                                    id={el._id}
                                    date={el.date}
                                    label={el.label}
                                    src={el.src}
                                    width={index % 2 ? "cardLarge" : "cardLittle"}
                                />
                            );
                        })}
            </div>
        </div>
    );
};

export default ImageGroup;