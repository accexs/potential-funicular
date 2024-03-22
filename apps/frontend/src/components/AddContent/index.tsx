"use client"
import {useContext, useRef, useState} from "react";
import {GlobalContext} from "@/context/GlobalContext";
import ClipIcon from "@/components/Icons/ClipIcon";

const AddContent: React.FC = () => {
    const [dragActive, setDragActive] = useState(false);
    const inputRef = useRef<any>(null);
    const [file, setFile] = useState<HTMLInputElement | null>(null);
    const {isSidebarOpen, setIsSidebarOpen, toggleSidebar,} = useContext(GlobalContext)

    const handleDragEnter = (e: any) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(true);
    }
    const handleDrop = (e: any) => {
        console.log("handleDrop", e);
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false)
        if (e.dataTransfer.files && e.dataTransfer.files[0]) setFile(e.dataTransfer.files[0])
        console.log('file', file)
    }
    const handleDragLeave = (e: any) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
    }
    const handleDragOver = (e: any) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(true);
    }
    const handleChange = (e: any) => {
        e.preventDefault();
        console.log("handleChange", e);
        if (e.target.files && e.target.files[0]) setFile(e.target.files[0])
        console.log('file', file)
    }
    const openFileExplorer = () => {
        console.log('openFileExplorer', openFileExplorer)
        inputRef.current.value = "";
        inputRef.current.click();
    }

    console.log('test', isSidebarOpen)

    return (
        <div
            className={`fixed flex flex-col items-center p-4 px-6 tracking-wider z-20 bg-brandGray ${
                isSidebarOpen ? '-translate-x-0' : 'translate-x-full'
            } top-0 end-0 transform h-screen w-screen transition-transform duration-300 ease-in-out`}
        >
            <div className="mt-28 text-brandGreen">
                <h2 className="text-xl">Agregar Pelicula</h2>
            </div>
            <form className="flex flex-col w-full items-center transition-all duration-300 ease-in-out">
                <div className={`${dragActive ? "border-solid" : "border-dashed"}
                         border-2 py-5 w-full mt-14 hover:cursor-pointer`}
                     onDragEnter={handleDragEnter}
                     onSubmit={(e) => e.preventDefault()}
                     onDrop={handleDrop}
                     onDragLeave={handleDragLeave}
                     onDragOver={handleDragOver}
                     onClick={openFileExplorer}
                >
                    <input
                        placeholder="fileInput"
                        className="hidden"
                        ref={inputRef}
                        type="file"
                        multiple={false}
                        onChange={handleChange}
                        accept="image/*"
                    />
                    <div className="flex items-center justify-center gap-3">
                        <ClipIcon/>
                        {file ?
                            <p>{file.name}</p>
                            :
                            <p>Agregá un archivo</p>
                        }
                    </div>
                </div>
                <input
                    className="mt-14 uppercase border-0 border-b border-gray-400 bg-brandGray outline-none placeholder:text-center placeholder:text-white w-56"
                    type="text" placeholder="Título"/>
                <button className="mt-14 uppercase bg-white opacity-50 h-12 w-56 text-black">Subir película</button>
            </form>
            <button className="mt-6 uppercase bg-brandGray border h-12 w-56" onClick={toggleSidebar}>salir</button>
        </div>
    );
}

export default AddContent