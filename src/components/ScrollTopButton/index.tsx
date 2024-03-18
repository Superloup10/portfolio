"use client"

import {useScrollTop} from "@/context/ScrollTopContext";
import {Button} from "@/components/ui/button";
import {ArrowUp} from "lucide-react";
import {useDictionary} from "@/context/DictionaryContext";

export default function ScrollTopButton() {
    const {visible, scrollToTop} = useScrollTop();
    const {dictionary} = useDictionary();

    return visible ? (
        <Button variant="outline" size="icon" onClick={scrollToTop}
                className="fixed rounded-full bottom-[21px] right-[21px] transition-opacity ease-in-out">
            <ArrowUp/>
            <span className="sr-only">{dictionary.sr.top}</span>
        </Button>
    ) : (<></>);
}
