import {ChangeEvent, FC, HTMLProps, useLayoutEffect, useState} from 'react'
import {motion, useAnimation} from "framer-motion";

interface InputProps extends HTMLProps<HTMLInputElement> {
    label?: string;
    value: string | number;
    error: boolean;
    onFocus?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = ({
                                   type,
                                   label,
                                   value,
                                   name,
                                   placeholder,
                                   error,
                                   disabled,
                                   onChange,
                                   ...props
                               }) => {
    const labelControl = useAnimation()
    const [isAnimating, setIsAnimating] = useState(false);
    useLayoutEffect(()=>{
        if(error){
            setIsAnimating(true)
            labelControl.start({
                opacity:[0,1,0,1]
            })
        }else{
            isAnimating && labelControl.start({opacity:[0.1,1]})
        }
    },[error])

    return (
            <div className={label?`flex bg-primary-200 flex-col rounded-[10px] px-2 border-4 border-primary-200`:'flex flex-col w-max'}>
                {label && <motion.label
                    animate={labelControl}
                    transition={{duration:2}}
                    htmlFor={label}
                    className={error ? `text-red-600` : `text-purple-800`}>
                    {error ? 'Check for validity!' : label}
                </motion.label>}
                <input
                    type={type}
                    id={label}
                    value={value}
                    className='
                   bg-inherit
                   transition-all
                   placeholder:text-primary-500
                   focus:placeholder:opacity-0
                   '

                    name={name}
                    placeholder={placeholder}
                    onChange={onChange}
                    disabled={disabled}
                    {...props}
                />
            </div>

    )
}

export default Input