import container from "@/lib/inversify.config";
import {ExperienceController} from "@/controller/experience.controller";
import {NextRequest} from "next/server";

export async function GET(request: NextRequest) {
    const controller = container.get(ExperienceController);
    return await controller.getExperience(request);
}
