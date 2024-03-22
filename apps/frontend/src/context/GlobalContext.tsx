import {createContext, useState} from "react";

const initialState = {
    isSidebarOpen: false,
    setIsSidebarOpen: (isNavOpen: boolean) => {
    },
    toggleSidebar: () => {
    },
}

const GlobalContext = createContext(initialState)

const GlobalContextProvider = ({children}: { children: React.ReactNode }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen)
    }

    return (
        <GlobalContext.Provider value={{isSidebarOpen, setIsSidebarOpen, toggleSidebar}}>
            {children}
        </GlobalContext.Provider>
    )
}

export {GlobalContextProvider, GlobalContext};