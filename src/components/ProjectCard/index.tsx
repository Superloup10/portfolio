"use client"

import {Project} from "@/domain/models/project.dto";
import useFetch from "@/hooks/useFetch";
import {useDictionary} from "@/context/DictionaryContext";

export default function ProjectCard() {
    const {data: projects} = useFetch<Project[]>("/api/v1/projects");
    const {dictionary} = useDictionary();

    return (
        <>
            <h3 id="projects">{dictionary.project}</h3>
            {projects && projects.map((project) => (
                <div key={project.id} className="flex gap-4 border-2 border-black dark:border-white">
                    <h4>{project.name}</h4>
                    <p>{project.description}</p>
                </div>
            ))}
        </>
    );
}
