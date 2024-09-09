import React from "react";
import "./Image.css";
// import image from "./../../assets/image-2.png"

export const Image = ({
    mainClassName="",
    classNameImg= "",
    loadedImage,
    alternativeText=""
}) => {
    return (
        <div className={mainClassName}>
            <img className={classNameImg} alt={alternativeText} src={loadedImage} />
        </div>
    );
};
