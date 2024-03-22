"use client"
import React, {useContext, useEffect, useState} from "react";
import avatarImg from "@images/profile.png"
import Image from "next/image";
import PlusIcon from "@/components/Icons/PlusIcon";
import {GlobalContext} from "@/context/GlobalContext";

const Header: React.FC = () => {
    const {isSidebarOpen, setIsSidebarOpen, toggleSidebar, isMenuOpen, toggleMenu} = useContext(GlobalContext)

    const handleAddContent = () => {
        console.log('toggle sidebar')
        toggleMenu()
        toggleSidebar()
    }

    return (
        <header className="flex w-full p-4 px-6 z-30 absolute">
            <nav className="flex justify-between items-center w-full gap-2 transition-all duration-300">
                <div className="flex text-white h-8 w-10 hover:cursor-pointer" onClick={toggleMenu}>
                    {isMenuOpen ?
                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.42892 1.42893L15.5711 15.5711" stroke="white" strokeLinecap="square"/>
                            <path d="M1.42892 15.5711L15.5711 1.42893" stroke="white" strokeLinecap="square"/>
                        </svg>
                        :
                        <svg className="block fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Mobile menu</title>
                            <path d="M0 5h20v1H0V3zm0 5h20v1H0V8zm0 5h10v1H0v-1z"></path>
                        </svg>
                    }
                </div>
                <p className="uppercase text-3xl text-brandGreen">
                    <span className="font-bold">Lite</span>
                    <span className="font-thin">flix</span>
                </p>
                <Image
                    src={avatarImg}
                    alt="profile image"
                    className="w-10 h-10 rounded-full border border-black bg-white"
                />
                {1 && (
                    <div className={`fixed flex flex-col items-start bg-brandGray -z-10 ${
                        isMenuOpen ? 'translate-x-0' : '-translate-x-full'
                    } top-0 start-0 transform h-screen w-screen transition-transform duration-300 ease-in-out`}>
                        <div className="flex flex-col gap-7 text-white uppercase pt-24 px-6 font-thin">
                            <div className="hover:font-bold hover:cursor-pointer" onClick={toggleMenu}>Inicio</div>
                            <div className="hover:font-bold hover:cursor-pointer">Series</div>
                            <div className="hover:font-bold hover:cursor-pointer">Peliculas</div>
                            <div className="hover:font-bold hover:cursor-pointer">Agregados Recientemente</div>
                            <div className="hover:font-bold hover:cursor-pointer">Populares</div>
                            <div className="hover:font-bold hover:cursor-pointer">Mis Peliculas</div>
                            <div className="hover:font-bold hover:cursor-pointer">Mis Lista</div>
                            <div
                                className="hover:font-extrabold hover:cursor-pointer flex items-center gap-2 font-bold py-7"
                                onClick={handleAddContent}>
                                <PlusIcon/> Agregar Pelicula
                            </div>
                            <div className="text-xl hover:font-bold">Cerrar Sesión</div>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}

export default Header