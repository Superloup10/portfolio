import {ProjectSkill} from "@/domain/models/projectskill.dto";

export interface Project {
    id: number;
    name: string;
    description: string;
    github_url: string;
    web_url: string | null;
    projectskill?: ProjectSkill[];
}
