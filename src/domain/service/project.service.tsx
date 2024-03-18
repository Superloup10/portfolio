import {ProjectRepository} from "@/domain/repository/project.repository";
import {inject, injectable} from "inversify";

@injectable()
export class ProjectService {
    constructor(@inject(ProjectRepository) private readonly repository: ProjectRepository) {
    }

    async getProjects() {
        return this.repository.getProjects();
    }

    async getProject(name: string) {
        const project = await this.repository.getProject(name);
        if (!project) {
            throw new Error(`Project not found: ${name}`);
        }
        return project;
    }
}
