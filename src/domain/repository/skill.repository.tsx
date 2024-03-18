import {injectable} from "inversify";
import prisma from "@/lib/prismadb";
import {Skill} from "@/domain/models/skill.dto";

@injectable()
export class SkillRepository {
    async getSkills(): Promise<Skill[]> {
        return prisma.skill.findMany({orderBy: {id: "asc"}});
    }

    async getSkill(name: string): Promise<Skill | null> {
        return prisma.skill.findUnique({where: {name}});
    }
}
