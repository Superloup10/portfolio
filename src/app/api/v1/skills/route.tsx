import container from "@/lib/inversify.config";
import {SkillController} from "@/controller/skill.controller";
import {NextRequest} from "next/server";

export async function GET() {
    const controller = container.get(SkillController);
    return await controller.getSkills();
}

export async function POST(request: NextRequest) {
    const controller = container.get(SkillController);
    return await controller.addSkill(request);
}
