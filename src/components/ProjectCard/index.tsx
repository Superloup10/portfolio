"use client"

import {Project} from "@/domain/models/project.dto";
import useFetch from "@/hooks/useFetch";
import {useDictionary} from "@/context/DictionaryContext";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import {Table, TableBody, TableCell, TableRow} from "@/components/ui/table";
import {GithubIcon, LinkIcon} from "lucide-react";
import Link from "next/link";
import {SkillIcon} from "@/components/SkillIcon";

function MobileViewProject({projects}: { projects: Project[] }) {
    return (
        <Accordion type="single" collapsible className="block lg:hidden">
            {projects.map((project) => (
                <AccordionItem key={project.id} value={`item-${project.id}`}>
                    <AccordionTrigger>{project.name}</AccordionTrigger>
                    <AccordionContent>
                        {project.description}
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-7 p-4">
                                {project.projectskill && project.projectskill.map((item) => (
                                    item.skill &&
                                    <SkillIcon key={item.skill_id} skill={item.skill} width={32} height={32}/>
                                ))}
                            </div>
                            <div className="flex items-center">
                                {project.web_url && (
                                    <Link href={project.web_url}>
                                        <LinkIcon/>
                                    </Link>
                                )}
                                <Link href={project.github_url}>
                                    <GithubIcon/>
                                </Link>
                            </div>
                        </div>
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    );
}

function DesktopViewProject({projects}: { projects: Project[] }) {
    return (
        <Table className="hidden lg:table">
            <TableBody>
                {projects.map((project) => (
                    <TableRow key={project.id}>
                        <TableCell>{project.name}</TableCell>
                        <TableCell>{project.description}</TableCell>
                        <TableCell>
                            <div className="flex items-center gap-2">
                                {project.projectskill && project.projectskill.map((item) => (
                                    item.skill &&
                                    <SkillIcon key={item.skill_id} skill={item.skill} width={32} height={32}/>
                                ))}
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className="flex items-center justify-between">
                                {project.web_url && (
                                    <Link href={project.web_url}>
                                        <LinkIcon/>
                                    </Link>
                                )}
                                <Link href={project.github_url}>
                                    <GithubIcon/>
                                </Link>
                            </div>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}

export default function ProjectCard() {
    const {data: projects} = useFetch<Project[]>("/api/v1/projects");
    const {dictionary} = useDictionary();

    return (
        <>
            <h3 id="projects" className="pt-2.5">{dictionary.project}</h3>
            {projects && (
                <>
                    <MobileViewProject projects={projects}/>
                    <DesktopViewProject projects={projects}/>
                </>
            )}
        </>
    );
}
