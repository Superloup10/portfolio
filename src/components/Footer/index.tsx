"use client"

import {useDictionary} from "@/context/DictionaryContext";

export default function Footer() {
    const {dictionary} = useDictionary();
    return (
        <footer className="pb-[21px] px-[21px]">
            <p className="text-[12px]">&copy; 2024 Damien ANDRÉ. {dictionary.copyright}</p>
        </footer>
    );
}
