import {inject, injectable} from "inversify";
import {SkillRepository} from "@/domain/repository/skill.repository";

@injectable()
export class SkillService {
    constructor(@inject(SkillRepository) private readonly repository: SkillRepository) {
    }

    getSkills() {
        return this.repository.getSkills();
    }

    async addSkill(name: string, url: string, imageUrl: string) {
        if (await this.repository.getSkill(name) !== null) {
            throw new Error(`The skill ${name} already exists.`);
        }
        return this.repository.addSkill(name, url, imageUrl);
    }

    async getSkill(name: string) {
        const skill = await this.repository.getSkill(name);
        if (!skill) {
            throw new Error(`The skill not found: ${name}.`);
        }
        return skill;
    }
}
