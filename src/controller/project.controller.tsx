import {ProjectService} from "@/domain/service/project.service";
import {NextRequest, NextResponse} from "next/server";
import {inject, injectable} from "inversify";

@injectable()
export class ProjectController {
    constructor(@inject(ProjectService) private readonly service: ProjectService) {
    }

    async getProjects() {
        const projects = await this.service.getProjects();
        return NextResponse.json(projects);
    }

    async getProject(request: NextRequest) {
        const name = request.nextUrl.searchParams.get("name")!;
        const project = await this.service.getProject(name);
        return NextResponse.json(project);
    }
}
