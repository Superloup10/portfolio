import container from "@/lib/inversify.config";
import {ProjectController} from "@/controller/project.controller";
import {NextRequest} from "next/server";

export function GET() {
    const controller = container.get(ProjectController);
    return controller.getProjects();
}

export function POST(request: NextRequest) {
    const controller = container.get(ProjectController);
    return controller.addProject(request);
}
