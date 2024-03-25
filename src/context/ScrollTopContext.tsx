"use client"

import {createContext, ReactNode, useContext, useEffect, useState} from "react";

interface ScrollTopContextProps {
    visible: boolean;
    scrollToTop: () => void;
}

const ScrollTopContext = createContext<ScrollTopContextProps>({
    visible: false,
    scrollToTop(): void {
    }
});

export const useScrollTop = () => {
    const context = useContext(ScrollTopContext);
    if (!context) {
        throw new Error("useScrollTop must be used within a ScrollTopProvider");
    }
    return context;
}

export default function ScrollTopProvider({children}: { children: ReactNode }) {
    const [visible, setVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 50) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <ScrollTopContext.Provider value={{visible, scrollToTop}}>
            {children}
        </ScrollTopContext.Provider>
    );
}
