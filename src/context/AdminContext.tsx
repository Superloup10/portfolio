"use client"

import {createContext, ReactNode, useContext, useState} from "react";

interface AdminContextProps {
    isAdmin: boolean;
    setAdmin: (isAdmin: boolean) => void;
}

interface AdminProviderProps {
    children: ReactNode;
}

const AdminContext = createContext<AdminContextProps>({
    isAdmin: false,
    setAdmin: () => {
    }
});

export const useAdmin = () => {
    const context = useContext(AdminContext);
    if (!context) {
        throw new Error("useAdmin must be used within a AdminProvider.");
    }
    return context;
}

export default function AdminProvider({children}: AdminProviderProps) {
    const [isAdmin, setAdmin] = useState<boolean>(false);
    return (
        <AdminContext.Provider value={{isAdmin, setAdmin: setAdmin}}>
            {children}
        </AdminContext.Provider>
    );
}
