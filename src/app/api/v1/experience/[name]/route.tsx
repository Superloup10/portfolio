import container from "@/lib/inversify.config";
import {ExperienceController} from "@/controller/experience.controller";
import {NextRequest} from "next/server";

export function GET(request: NextRequest) {
    const controller = container.get(ExperienceController);
    return controller.getExperience(request);
}
