"use client";
import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import dynamic from 'next/dynamic';

import { videos } from './videos';

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const Slider = () => {
    const [isAnimating, setIsAnimating] = useState(false);
    const [isClient, setIsClient] = useState(false);
    const sliderRef = useRef(null);


    return (
        <>
            <div className="container">
                <div className="slider" ref={sliderRef}>
                    {videos.map((video) => (
                        <div className="card" key={video.id}>
                            <div className="card-info">
                                <div className="card-item">
                                    <p>
                                        {video.date}
                                    </p>
                                </div>
                                <div className="card-item">
                                    <p>
                                        {video.title}
                                    </p>
                                </div>
                                <div className="card-item">
                                    <p>
                                        {video.category}
                                    </p>
                                </div>
                            </div>
                            <div className="video-player">
                                <ReactPlayer
                                    url={`https://vimeo.com/${video.id}`}
                                    controls={false}
                                    autoPlay={true}
                                    loop={true}
                                    playing
                                    muted
                                    width="100%"
                                    height="100%"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Slider;
