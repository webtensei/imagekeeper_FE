import {  useRef } from "react";
import {motion} from "framer-motion";



export const Layout = ({ onClose, children }) => {
  const overlayRef = useRef();
  const contentRef = useRef();



  return (
    <motion.div
        animate={{}}
        transition={{}}
        className='fixed top-0 bottom-0 left-0 right-0 p-9 box-border flex flex-col justify-center items-center z-50'>

        <div ref={overlayRef} className='fixed w-full h-full top-0 bottom-0 left-0 right-0 bg-white/80 backdrop-blur-[10px] z-[2]  cursor-pointer' onClick={onClose} />

        <motion.div
            animate={{opacity:[0.3,1]}}
            transition={{duration:1}}
            ref={contentRef} className='box-border overflow-auto border-l-green-500 z-[3] '>
          {children}
        </motion.div>

    </motion.div>
  );
};
