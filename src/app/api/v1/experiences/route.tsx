import container from "@/lib/inversify.config";
import {ExperienceController} from "@/controller/experience.controller";
import {NextRequest} from "next/server";

export function GET() {
    const controller = container.get(ExperienceController);
    return controller.getExperiences();
}

export function POST(request: NextRequest) {
    const controller = container.get(ExperienceController);
    return controller.addExperience(request);
}
