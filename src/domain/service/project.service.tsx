import {ProjectRepository} from "@/domain/repository/project.repository";
import {inject, injectable} from "inversify";

@injectable()
export class ProjectService {
    constructor(@inject(ProjectRepository) private readonly repository: ProjectRepository) {
    }

    getProjects() {
        return this.repository.getProjects();
    }

    async addProject(name: string, description: string, githubUrl: string, webUrl?: string) {
        if(await this.repository.getProject(name) !== null) {
            throw new Error(`The project ${name} already exists.`);
        }
        return this.repository.addProject(name, description, githubUrl, webUrl);
    }

    async getProject(name: string) {
        const project = await this.repository.getProject(name);
        if (!project) {
            throw new Error(`The project not found: ${name}`);
        }
        return project;
    }
}
