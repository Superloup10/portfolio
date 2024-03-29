import {NextRequest} from "next/server";
import container from "@/lib/inversify.config";
import {ProjectController} from "@/controller/project.controller";

export function GET(request: NextRequest) {
    const controller = container.get(ProjectController);
    return controller.getProject(request);
}
