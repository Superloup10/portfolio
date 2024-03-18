import container from "@/lib/inversify.config";
import {ExperienceController} from "@/controller/experience.controller";

export async function GET() {
    const controller = container.get(ExperienceController);
    return await controller.getExperiences();
}
