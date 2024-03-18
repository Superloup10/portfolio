"use client"

import {useScrollTop} from "@/context/ScrollTopContext";
import {Button} from "@/components/ui/button";
import {ArrowUp} from "lucide-react";

export default function ScrollTopButton() {
    const {visible, scrollToTop} = useScrollTop();

    return visible ? (
        <Button variant="outline" size="icon" onClick={scrollToTop}
                className="fixed rounded-full bottom-[21px] right-[21px] transition-opacity ease-in-out">
            <ArrowUp/>
            <span className="sr-only">Retour en haut</span>
        </Button>
    ) : (<></>);
}
