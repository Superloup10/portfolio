import {inject, injectable} from "inversify";
import {ExperienceRepository} from "@/domain/repository/experience.repository";

@injectable()
export class ExperienceService {
    constructor(@inject(ExperienceRepository) private readonly repository: ExperienceRepository) {
    }

    async getExperiences() {
        return this.repository.getExperiences();
    }

    async addExperience(name: string, description: string, beginDate: Date, endDate: Date) {
        if (await this.repository.getExperience(name) !== null) {
            throw new Error(`Experience ${name} already exists.`);
        }
        return this.repository.addExperience(name, description, beginDate, endDate);
    }

    async getExperience(name: string) {
        const experience = await this.repository.getExperience(name);
        if (!experience) {
            throw new Error(`The experience not found: ${name}.`);
        }
        return experience;
    }
}
