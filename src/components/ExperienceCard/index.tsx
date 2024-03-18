"use client"

import {Experience} from "@/domain/models/experience.dto";
import useFetch from "@/hooks/useFetch";

export default function ExperienceCard() {
    const {data: experiences} = useFetch<Experience>("/api/v1/experiences");
    return (
        <>
            <h3>Expériences</h3>
            <ul>
                {experiences && experiences.map(experience => (
                    <li key={experience.id}>{experience.name}</li>
                ))}
            </ul>
        </>
    );
}
