import container from "@/lib/inversify.config";
import {SkillController} from "@/controller/skill.controller";

export async function GET() {
    const controller = container.get(SkillController);
    return await controller.getSkills();
}
