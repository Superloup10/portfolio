import {injectable} from "inversify";
import {Social} from "@/domain/models/social.dto";
import prisma from "@/lib/prismadb";

@injectable()
export class SocialRepository {
    async getSocials(): Promise<Social[]> {
        return prisma.social.findMany({orderBy: {id: "asc"}});
    }

    async addSocial(name: string, url: string): Promise<Social> {
        return prisma.social.create({data: {name, url}});
    }

    async getSocial(name: string): Promise<Social | null> {
        return prisma.social.findUnique({where: {name}});
    }
}
