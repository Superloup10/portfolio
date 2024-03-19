import {inject, injectable} from "inversify";
import {ExperienceService} from "@/domain/service/experience.service";
import {NextRequest, NextResponse} from "next/server";

@injectable()
export class ExperienceController {
    constructor(@inject(ExperienceService) private readonly service: ExperienceService) {
    }

    async getExperiences() {
        const experiences = await this.service.getExperiences();
        return NextResponse.json(experiences);
    }

    async addExperience(request: NextRequest) {
        const {name, description, beginDate, endDate} = await request.json();
        await this.service.addExperience(name, description, beginDate, endDate);
        return NextResponse.json({message: "Experience added successfully."}, {status: 201});
    }

    async getExperience(request: NextRequest) {
        const name = request.nextUrl.searchParams.get("name")!;
        const experience = await this.service.getExperience(name);
        return NextResponse.json(experience);
    }
}
