import container from "@/lib/inversify.config";
import {SkillController} from "@/controller/skill.controller";
import {NextRequest} from "next/server";

export function GET() {
    const controller = container.get(SkillController);
    return controller.getSkills();
}

export function POST(request: NextRequest) {
    const controller = container.get(SkillController);
    return controller.addSkill(request);
}
