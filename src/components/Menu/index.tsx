"use client"
import Link from "next/link";
import {useDictionary} from "@/context/DictionaryContext";
import {LucideMenu} from "lucide-react";
import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet";
import {Button} from "@/components/ui/button";

export default function Menu() {
    const {dictionary} = useDictionary();
    return (
        <>
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="outline" className="block sm:hidden">
                        <LucideMenu/>
                    </Button>
                </SheetTrigger>
                <SheetContent className="w-[200px] sm:hidden" side="left">
                    <nav>
                        <ul>
                            <li><Link href="#stack">{dictionary.stack}</Link></li>
                            <li><Link href="#projects">{dictionary.project}</Link></li>
                            <li><Link href="#experiences">{dictionary.experience}</Link></li>
                        </ul>
                    </nav>
                </SheetContent>
            </Sheet>
            <nav className="hidden sm:flex">
                <ul className="sm:flex sm:gap-4 sm:flex-row sm:justify-between">
                    <li><Link href="#stack">{dictionary.stack}</Link></li>
                    <li><Link href="#projects">{dictionary.project}</Link></li>
                    <li><Link href="#experiences">{dictionary.experience}</Link></li>
                </ul>
            </nav>
        </>
    );
}
