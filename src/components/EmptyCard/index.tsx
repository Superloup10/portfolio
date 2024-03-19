import {useRef, useState} from "react";
import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card";
import Image from 'next/image';
import {Ellipsis, ImagePlus, X} from "lucide-react";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";

export default function EmptyCard() {
    const [name, setName] = useState("");
    const [image, setImage] = useState("/images/placeholder_card.png");
    const [hover, setHover] = useState(false);
    const inputFile = useRef<HTMLInputElement>(null);
    const handleButtonClick = () => {
        if (inputFile.current) {
            inputFile.current.click();
        }
    };

    const handleImageChange = (event: any) => {
        setImage(URL.createObjectURL(event.target.files[0]));
    };

    return (
        <Card className="flex flex-col items-center justify-center w-full h-full space-y-4">
            <CardHeader className="flex flex-row items-center justify-between w-full">
                <Ellipsis size={16}/>
                <X size={16}/>
            </CardHeader>
            <CardContent className="relative" onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)}>
                <Image src={image} alt={name ? name : "placeholder"} width="70" height="70"/>
                {hover &&
                    <>
                        <Button size="default" variant="ghost" className="absolute top-0 w-[70px] h-[70px] opacity-50"
                                onClick={handleButtonClick}>
                            <ImagePlus/>
                        </Button>
                        <Input type="file" id="file" ref={inputFile} onChange={handleImageChange} className="hidden"
                               accept="image/*"/>
                    </>
                }
            </CardContent>
            <CardFooter>
                {name}
            </CardFooter>
        </Card>
    );
}
