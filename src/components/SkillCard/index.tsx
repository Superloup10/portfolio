"use client"

import {Skill} from "@/domain/models/skill.dto";
import useFetch from "@/hooks/useFetch";
import {useDictionary} from "@/context/DictionaryContext";
import ParameterCard from "@/components/ParameterCard";

export default function SkillCard() {
    const {data: skills} = useFetch<Skill>("/api/v1/skills");
    const {dictionary} = useDictionary();
    return (
        <>
            <h3 id="stack" className="mt-1.5 p-2.5">{dictionary.stack}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {skills && skills.map(skill => (
                    <ParameterCard key={skill.id} url={skill.url} imageUrl={skill.image_url} name={skill.name}/>
                ))}
            </div>
        </>
    );
}
