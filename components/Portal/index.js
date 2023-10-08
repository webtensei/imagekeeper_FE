'use client';

import {useEffect, useState} from "react";
import ReactDOM from "react-dom";

const Portal = ({children}) => {
    const [isBrowser, setIsBrowser] = useState(false)

    useEffect(() => {
        setIsBrowser(true)
    }, [])
    if(isBrowser){
        return ReactDOM.createPortal(children,document.getElementById('modal'))
    } else  {
        return null
    }
};

export default Portal;
