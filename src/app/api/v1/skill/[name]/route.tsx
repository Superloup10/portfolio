import {NextRequest} from "next/server";
import container from "@/lib/inversify.config";
import {SkillController} from "@/controller/skill.controller";

export async function GET(request: NextRequest) {
    const controller = container.get(SkillController);
    return await controller.getSkill(request);
}
