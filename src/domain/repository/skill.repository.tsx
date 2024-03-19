import {injectable} from "inversify";
import prisma from "@/lib/prismadb";
import {Skill} from "@/domain/models/skill.dto";

@injectable()
export class SkillRepository {
    async getSkills(): Promise<Skill[]> {
        return prisma.skill.findMany({orderBy: {id: "asc"}});
    }

    async addSkill(name: string, url: string, imageUrl: string): Promise<Skill> {
        return prisma.skill.create({data: {name, url, image_url: imageUrl}});
    }

    async getSkill(name: string): Promise<Skill | null> {
        return prisma.skill.findUnique({where: {name}});
    }
}
