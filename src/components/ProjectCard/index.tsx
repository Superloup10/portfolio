"use client"

import {Project} from "@/domain/models/project.dto";
import useFetch from "@/hooks/useFetch";

export default function ProjectCard() {
    const {data: projects} = useFetch<Project>("/api/v1/projects");

    return (
        <>
            <h3>Projets</h3>
            {projects && projects.map((project) => (
                <div key={project.id} className="flex border-2 border-black dark:border-white">
                    <h4>{project.name}</h4>
                    <p>{project.description}</p>
                </div>
            ))}
        </>
    );
}
