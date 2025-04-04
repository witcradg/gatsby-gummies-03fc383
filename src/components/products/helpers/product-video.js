import React from "react";

export const ProductVideo = ({src, title, ratio}) => {
    if (!src) return null
    const url = `https://youtube.com/embed/${src}`

    const containerClass = ratio? `iframe-container-${ratio}` : 'iframe-container-16-9'

    return (
        <div className={containerClass}>
            <iframe
                className="responsive-iframe border-0"
                src={url}
                title={title}
                allowFullScreen
            />
        </div>
    );
}; 

