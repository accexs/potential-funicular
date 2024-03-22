import {createContext, useEffect, useState} from "react";

const initialState = {
    isSidebarOpen: false,
    setIsSidebarOpen: (isNavOpen: boolean) => {
    },
    toggleSidebar: () => {
    },
    isMenuOpen: false,
    setIsMenuOpen: (shouldScroll: boolean) => {
    },
    toggleMenu: () => {
    }
}

const GlobalContext = createContext(initialState)

const GlobalContextProvider = ({children}: { children: React.ReactNode }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen)
    }

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    useEffect(() => {
        if (isMenuOpen || isSidebarOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
    }, [isMenuOpen, isSidebarOpen])

    const providerValue = {
        isSidebarOpen, setIsSidebarOpen, toggleSidebar, isMenuOpen, setIsMenuOpen, toggleMenu,
    }

    return (
        <GlobalContext.Provider value={providerValue}>
            {children}
        </GlobalContext.Provider>
    )
}

export {GlobalContextProvider, GlobalContext};