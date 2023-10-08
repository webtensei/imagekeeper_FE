import ReactDOM from "react-dom";
import React from "react";
import ImageGroup from "@/components/ImageGroup";
import UploadingCard from "@/components/Card/UploadingCard";

export function createUploadZone() {
    const mainWrap = document.querySelector('section[id="#content"]')
    const group = document.createElement('div');
    ReactDOM.render(<ImageGroup date={Date.now() / 1000} photos={[]} current={true}/>, group);
    mainWrap && mainWrap.prepend(group)
    return 0
}

export function increaseIndicatorLength() {
    const currentPhotosLength = document.querySelector('div[id="#currentAmount"]')
    if (currentPhotosLength) {
        currentPhotosLength.innerHTML = String(Number(currentPhotosLength.innerHTML) + 1)
    }
    return 0
}

export function createUpload({currentMonth, image}: {
    currentMonth: NodeListOf<Element>;
    image: File;
}) {

    if (currentMonth[0]) {
        const uploadingCard = document.createElement('div');
        ReactDOM.render(<UploadingCard src={URL.createObjectURL(image)} image={image}/>, uploadingCard);

        const firstElement = currentMonth[0].querySelector('*:first-child');
        if (firstElement) {
            currentMonth[0].insertBefore(uploadingCard, firstElement);
        } else {
            currentMonth[0].appendChild(uploadingCard);
        }
    }
}

