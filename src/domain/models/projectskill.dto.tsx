import {Skill} from "@/domain/models/skill.dto";
import {Project} from "@/domain/models/project.dto";
import {Experience} from "@/domain/models/experience.dto";

export interface ProjectSkill {
    project_id: number;
    skill_id: number;
    experience_id?: number;
    skill?: Skill;
    project?: Project;
    experience?: Experience;
}
