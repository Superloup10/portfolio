import {inject, injectable} from "inversify";
import {SocialRepository} from "@/domain/repository/social.repository";

@injectable()
export class SocialService {
    constructor(@inject(SocialRepository) private readonly repository: SocialRepository) {
    }

    async getSocials() {
        return this.repository.getSocials();
    }

    async getSocial(name: string) {
        const social = await this.repository.getSocial(name);
        if (!social) {
            throw new Error(`Social not found: ${name}`);
        }
        return this.repository.getSocial(name);
    }
}
