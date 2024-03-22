"use client"

import {GlobalContextProvider} from "@/context/GlobalContext";

const Providers = ({children}: { children: React.ReactNode }) => {
    return (
        <GlobalContextProvider>
            {children}
        </GlobalContextProvider>
    )
}

export default Providers;