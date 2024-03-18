"use client"

import {Card, CardContent, CardHeader} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import {Skill} from "@/domain/models/skill.dto";
import useFetch from "@/hooks/useFetch";

export default function SkillCard() {
    const {data: skills} = useFetch<Skill>("/api/v1/skills");
    return (
        <>
            <h3 className="mt-1.5 p-2.5">Stack Technique</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {skills && skills.map(skill => (
                    <Link key={skill.id} href={skill.url}>
                        <Card className="flex flex-col items-center justify-center w-full h-full">
                            <CardHeader>
                                <Image src={skill.image_url} alt={skill.name} width="70" height="70"/>
                            </CardHeader>
                            <CardContent>
                                {skill.name}
                            </CardContent>
                        </Card>
                    </Link>
                ))
                }
            </div>
        </>
    );
}
