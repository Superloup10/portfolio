import {inject, injectable} from "inversify";
import {SocialRepository} from "@/domain/repository/social.repository";

@injectable()
export class SocialService {
    constructor(@inject(SocialRepository) private readonly repository: SocialRepository) {
    }

    getSocials() {
        return this.repository.getSocials();
    }

    async addSocial(name: string, url: string) {
        if (await this.repository.getSocial(name) !== null) {
            throw new Error(`The social ${name} already exists.`);
        }
        return this.repository.addSocial(name, url);
    }

    async getSocial(name: string) {
        const social = await this.repository.getSocial(name);
        if (!social) {
            throw new Error(`The social not found: ${name}.`);
        }
        return social;
    }
}
