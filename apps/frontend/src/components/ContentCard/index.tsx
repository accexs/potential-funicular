"use client"
import React, {useEffect, useState} from "react";
import Image from "next/image";
import CirclePlayIcon from "@/components/Icons/CirclePlayIcon";
import StarIcon from "@/components/Icons/StarIcon";

type ContentCardProps = { title: string, img: string, rating: string, year: string }

const ContentCard: React.FC<ContentCardProps> = ({title, img, rating, year}: ContentCardProps) => {
    const [isMobile, setIsMobile] = useState(false);
    const [showOverlay, setShowOverlay] = useState(false);

    useEffect(() => {
        setIsMobile(window.innerWidth < 768)
    }, [])

    const handleCardClick = () => {
        if (isMobile) setShowOverlay(!showOverlay);
    };

    const handleMouseEnter = () => {
        if (!isMobile) setShowOverlay(true);
    };

    const handleMouseLeave = () => {
        if (!isMobile) setShowOverlay(false);
    };

    return (
        <div className="relative w-full h-full rounded shadow flex items-end justify-center"
             onClick={handleCardClick}
             onMouseEnter={handleMouseEnter}
             onMouseLeave={handleMouseLeave}
        >
            <Image
                fill={true}
                src={img}
                alt="poster"
                className="object-center rounded"
            />
            <div className={`flex items-end justify-center transition-all duration-200 ${showOverlay ? "hidden" : ""}`}>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-80 rounded"/>
                <div className="absolute font-thin tracking-widest mb-9">{title}</div>
                <div className="absolute top-1/4 w-14 h-14">
                    <CirclePlayIcon/>
                </div>
            </div>
            <div
                className={`absolute inset-0 bg-[#242424] rounded transition-all duration-300 ${showOverlay ? "opacity-70" : "opacity-0"}`}
            >
                <div className="flex flex-col justify-end w-full h-full px-8 pb-5 gap-4">
                    <div className="flex gap-3 items-center">
                        <span className="w-10 h-10"><CirclePlayIcon/></span> {title}
                    </div>
                    <div className="flex justify-between">
                        <div className="flex items-center gap-2">
                            <span className=""><StarIcon/></span>{rating}
                        </div>
                        <div>{year}</div>
                    </div>
                </div>
            </div>
        </div>
    )
        ;
}

export default ContentCard