import prisma from "@/lib/prismadb";
import {injectable} from "inversify";
import {Project} from "@/domain/models/project.dto";

@injectable()
export class ProjectRepository {
    async getProjects(): Promise<Project[]> {
        return prisma.project.findMany({orderBy: {id: "asc"}});
    }

    async addProject(name: string, description: string, githubUrl: string, webUrl?: string): Promise<Project> {
        return prisma.project.create({data: {name, description, github_url: githubUrl, web_url: webUrl}});
    }

    async getProject(name: string): Promise<Project | null> {
        return prisma.project.findUnique({where: {name}});
    }
}
