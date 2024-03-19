import container from "@/lib/inversify.config";
import {ProjectController} from "@/controller/project.controller";
import {NextRequest} from "next/server";

export async function GET() {
    const controller = container.get(ProjectController);
    return await controller.getProjects();
}

export async function POST(request: NextRequest) {
    const controller = container.get(ProjectController);
    return await controller.addProject(request);
}
