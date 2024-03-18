import {injectable} from "inversify";
import {Experience} from "@/domain/models/experience.dto";
import prisma from "@/lib/prismadb";

@injectable()
export class ExperienceRepository {
    async getExperiences(): Promise<Experience[]> {
        return prisma.formation.findMany({orderBy: {id: "asc"}});
    }

    async getExperience(name: string): Promise<Experience | null> {
        return prisma.formation.findUnique({where: {name}});
    }
}
