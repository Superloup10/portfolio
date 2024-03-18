import {inject, injectable} from "inversify";
import {ExperienceRepository} from "@/domain/repository/experience.repository";

@injectable()
export class ExperienceService {
    constructor(@inject(ExperienceRepository) private readonly repository: ExperienceRepository) {
    }

    async getExperiences() {
        return this.repository.getExperiences();
    }

    async getExperience(name: string) {
        const experience = await this.repository.getExperience(name);
        if (!experience) {
            throw new Error(`Experience not found: ${name}`);
        }
        return experience;
    }
}
