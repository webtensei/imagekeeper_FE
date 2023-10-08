"use client";
import {forwardRef} from "react";
import React from "react";
import {twMerge} from "tailwind-merge";
import {HTMLMotionProps, motion} from "framer-motion";
interface ButtonProps
    extends HTMLMotionProps<"button"> {
    startIcon?: React.ReactElement,
    children?: React.ReactNode
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
                                                               className,
                                                               children,
                                                               disabled,
                                                               startIcon,
                                                               type = "button",
                                                               ...props
                                                           }, ref) => {
    return (
        <motion.button
            whileTap={{ scale: 0.93 }}
            type={type}
            className={twMerge(`
           inline-flex
           gap-x-[10px]
           p-[15px]
           pr-[20px]
           bg-primary-200
           transition-all
           hover:bg-opacity-70  
           rounded-[10px]
           text-purple-800
           tracking-tighter
           hover:text-purple-700
           `, className)}
            disabled={disabled}
            ref={ref}
            {...props}
        >
            {startIcon}{children}
        </motion.button>
    )
})
Button.displayName = "Button"

export default Button;