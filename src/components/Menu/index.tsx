"use client"
import Link from "next/link";
import {useDictionary} from "@/context/DictionaryContext";

export default function Menu() {
    const {dictionary} = useDictionary();
    return (
        <nav>
            <ul><Link href="#stack">{dictionary.stack}</Link></ul>
            <ul><Link href="#projects">{dictionary.project}</Link></ul>
            <ul><Link href="#experiences">{dictionary.experience}</Link></ul>
        </nav>
    );
}
