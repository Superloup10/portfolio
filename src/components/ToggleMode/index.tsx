"use client"

import {useTheme} from "next-themes";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";
import {Moon, Sun} from "lucide-react";
import {useDictionary} from "@/context/DictionaryContext";

export default function ToggleMode() {
    const {setTheme} = useTheme();
    const {dictionary} = useDictionary();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                    <Sun
                        className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"/>
                    <Moon
                        className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"/>
                    <span className="sr-only">{dictionary.sr.toggle}</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setTheme("light")}>{dictionary.toggle.light}</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>{dictionary.toggle.dark}</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>{dictionary.toggle.system}</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
