"use client"
import {ThemeProvider as NextThemeProvider} from "next-themes";
import {type ThemeProviderProps} from "next-themes/dist/types";

export default function ThemeProvider({children, ...prop}: ThemeProviderProps) {
    return (
        <NextThemeProvider {...prop}>
            {children}
        </NextThemeProvider>
    );
}
