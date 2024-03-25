import {NextRequest} from "next/server";
import container from "@/lib/inversify.config";
import {SkillController} from "@/controller/skill.controller";

export function GET(request: NextRequest) {
    const controller = container.get(SkillController);
    return controller.getSkill(request);
}
