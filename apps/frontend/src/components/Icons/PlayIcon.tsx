import React from "react";

type PlayIconProps = { strokeWidth?: number }

const PlayIcon: React.FC<PlayIconProps> = ({strokeWidth = 1}: PlayIconProps) => {
    return (
        <svg
            width="14"
            height="16"
            viewBox="0 0 14 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.9423 8.2363L2.625 1.875V14.125L11.9423 8.2363Z"
                stroke="white"
                strokeWidth={strokeWidth}
            />
        </svg>
    )
}

export default PlayIcon