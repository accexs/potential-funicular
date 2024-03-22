"use client"
import React, {JSX, useEffect, useRef, useState} from "react";
import ArrowDownIcon from "@/components/Icons/ArrowDownIcon";

const Dropdown: React.FC = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const optionsRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        setIsMobile(window.innerWidth < 768)
    }, [])

    useEffect(() => {
        if (isOpen && optionsRef.current) optionsRef.current.focus()
    }, [isOpen])

    const toggleDropdown = () => {
        setIsOpen(!isOpen)
    }

    const handleBlur = () => {
        setIsOpen(false);
    };

    const renderOptions = (): JSX.Element => {
        return (
            <>
                <div
                    className="px-4 py-2 transition-all duration-100 hover:font-bold hover:cursor-pointer flex justify-between">
                    Populares
                    <svg className="" width="14" height="11" viewBox="0 0 14 11" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 5L5 9L13 1" stroke="white" strokeWidth="2"/>
                    </svg>

                </div>
                <div className="px-4 py-2 transition-all duration-100 hover:font-bold hover:cursor-pointer flex justify-between">
                    Mis Peliculas
                    <svg className="hidden" width="14" height="11" viewBox="0 0 14 11" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 5L5 9L13 1" stroke="white" strokeWidth="2"/>
                    </svg>
                </div>
            </>
        )
    }

    return (
        <div className="w-full flex justify-center uppercase font-thin text-white">
            <button
                className="px-4 py-2 text-center uppercase"
                onClick={toggleDropdown}
            >
                <div className="flex items-center justify-center gap-2">
                    Ver: <span className="font-bold">Populares</span> <ArrowDownIcon/>
                </div>
            </button>
            {isMobile ?
                <div
                    tabIndex={-1} ref={optionsRef}
                    className={`fixed bottom-0 left-0 bg-brandGray py-4 w-screen md:hidden transition-all duration-300 ease-in-out ${
                        isOpen ? "transform translate-y-0" : "transform translate-y-full"
                    }`} onBlur={handleBlur}>
                    {renderOptions()}
                </div>
                :
                <div
                    className={`absolute shadow mt-12 w-screen bg-brandGray z-10 transition-all duration-300 ease-in-out ${
                        isOpen ? 'opacity-100' : 'opacity-0 invisible'
                    }`} onMouseLeave={handleBlur}>
                    {renderOptions()}
                </div>
            }
        </div>
    );
}

export default Dropdown