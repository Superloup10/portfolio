import {inject, injectable} from "inversify";
import {SocialService} from "@/domain/service/social.service";
import {NextRequest, NextResponse} from "next/server";

@injectable()
export class SocialController {
    constructor(@inject(SocialService) private readonly service: SocialService) {
    }

    async getSocials() {
        const socials = await this.service.getSocials();
        return NextResponse.json(socials);
    }

    async addSocial(request: NextRequest) {
        const {name, url} = await request.json();
        await this.service.addSocial(name, url);
        return NextResponse.json({message: "Social added successfully."}, {status: 201});
    }

    async getSocial(request: NextRequest) {
        const name = request.nextUrl.searchParams.get("name")!;
        const social = await this.service.getSocial(name);
        return NextResponse.json(social);
    }
}
