import {injectable} from "inversify";
import {Experience} from "@/domain/models/experience.dto";
import prisma from "@/lib/prismadb";

@injectable()
export class ExperienceRepository {
    async getExperiences(): Promise<Experience[]> {
        return prisma.formation.findMany({orderBy: {id: "asc"}});
    }

    async addExperience(name: string, description: string, beginDate: Date, endDate: Date): Promise<Experience> {
        return prisma.formation.create({data: {name, description, begin_date: beginDate, end_date: endDate}});
    }

    async getExperience(name: string): Promise<Experience | null> {
        return prisma.formation.findUnique({where: {name}});
    }
}
