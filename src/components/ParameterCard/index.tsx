"use client"
import Link from "next/link";
import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card";
import Image from "next/image";
import {Ellipsis, X} from "lucide-react";
import {useAdmin} from "@/context/AdminContext";

interface ParameterCardProps {
    url: string;
    imageUrl: string;
    name: string;
}

export default function ParameterCard({url, imageUrl, name}: ParameterCardProps) {
    const {isAdmin} = useAdmin();
    return (
        <Link href={url}>
            <Card className="flex flex-col items-center justify-center w-full h-full">
                {isAdmin && (
                    <CardHeader className="flex flex-row items-center justify-between w-full">
                        <Ellipsis size={16}/>
                        <X size={16}/>
                    </CardHeader>
                )}
                <CardContent className={isAdmin ? "" : "pt-6"}>
                    <Image src={imageUrl} alt={name} width="70" height="70"/>
                </CardContent>
                <CardFooter>
                    {name}
                </CardFooter>
            </Card>
        </Link>
    );
}
