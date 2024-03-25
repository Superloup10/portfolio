"use client"

import {Experience} from "@/domain/models/experience.dto";
import useFetch from "@/hooks/useFetch";
import {useDictionary} from "@/context/DictionaryContext";

export default function ExperienceCard() {
    const {data: experiences} = useFetch<Experience[]>("/api/v1/experiences");
    const {dictionary} = useDictionary();
    return (
        <>
            <h3 id="experiences" className="py-2.5">{dictionary.experience}</h3>
            <ul>
                {experiences && experiences.map(experience => (
                    <li key={experience.id}>{experience.name}</li>
                ))}
            </ul>
        </>
    );
}
