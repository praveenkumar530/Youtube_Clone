import React from 'react'
import './_video.scss'
import { AiFillEye } from 'react-icons/ai'

const Video = () => {
    return (
        <div className="video">
            <div className="video__top" >
                <img src="https://i.ytimg.com/vi/tH93lLehjCs/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDw11ncd06qi4f6q-KrN9-8OecxTg" alt="" />
                <span className="duration">05:34</span>
            </div>
            <div className="video__title" > this is an youtube tsjdflaskdjfslkdfsd  alskfj itle </div>
            <div className="video__details" >
                <span >
                    <AiFillEye />5m views •
                </span>
                <span >5 days ago</span>
            </div>
            <div className="video__channel" >

                <img src="https://yt3.ggpht.com/3t4lfPe19nwe2Mrs8HEFF4VzV27yKal--i70lxjRB4olUtqJmp-vXH_o9U5z-vtIg9Fqtw7reA=s68-c-k-c0x00ffffff-no-rj" alt="" />
                <p>channel title</p>
            </div>

        </div>
    )
}

export default Video
