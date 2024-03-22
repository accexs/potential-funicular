import React from "react";
import PlayIcon from "@/components/Icons/PlayIcon";

const CirclePlayIcon: React.FC = () => {
    return (
        <div className="flex items-center justify-center text-center rounded-full border-2 border-white w-full h-full bg-[#242424] text-white bg-opacity-50">
            <PlayIcon strokeWidth={2}/>
        </div>
    )
}

export default CirclePlayIcon