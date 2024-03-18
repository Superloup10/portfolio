import prisma from "@/lib/prismadb";
import {injectable} from "inversify";
import {Project} from "@/domain/models/project.dto";

@injectable()
export class ProjectRepository {
    async getProjects(): Promise<Project[]> {
        return prisma.project.findMany({orderBy: {id: "asc"}});
    }

    async getProject(name: string): Promise<Project | null> {
        return prisma.project.findUnique({where: {name}});
    }
}
