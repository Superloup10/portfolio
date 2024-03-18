import {inject, injectable} from "inversify";
import {SkillRepository} from "@/domain/repository/skill.repository";

@injectable()
export class SkillService {
    constructor(@inject(SkillRepository) private readonly repository: SkillRepository) {
    }

    async getSkills() {
        return this.repository.getSkills();
    }

    async getSkill(name: string) {
        const skill = await this.repository.getSkill(name);
        if (!skill) {
            throw new Error(`Skill not found: ${name}`);
        }
        return skill;
    }
}
