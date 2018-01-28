import React from 'react'

const Video = ({src,type, ...props})=>(

    <video {...props}>
        <source src={src} type={type} />
            Your browser does not support the video tag.
    </video>
)

export  default Video;