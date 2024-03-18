import container from "@/lib/inversify.config";
import {ProjectController} from "@/controller/project.controller";

export async function GET() {
    const controller = container.get(ProjectController);
    return await controller.getProjects();
}
