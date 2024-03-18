import {inject, injectable} from "inversify";
import {SkillService} from "@/domain/service/skill.service";
import {NextRequest, NextResponse} from "next/server";

@injectable()
export class SkillController {
    constructor(@inject(SkillService) private readonly service: SkillService) {
    }

    async getSkills() {
        const skills = await this.service.getSkills();
        return NextResponse.json(skills);
    }

    async getSkill(request: NextRequest) {
        const name = request.nextUrl.searchParams.get("name")!;
        const skill = await this.service.getSkill(name);
        return NextResponse.json(skill);
    }
}
