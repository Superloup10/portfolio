import "reflect-metadata";
import {Container} from "inversify";
import {ProjectRepository} from "@/domain/repository/project.repository";
import {ProjectService} from "@/domain/service/project.service";
import {ProjectController} from "@/controller/project.controller";
import {SkillRepository} from "@/domain/repository/skill.repository";
import {SkillService} from "@/domain/service/skill.service";
import {SkillController} from "@/controller/skill.controller";
import {ExperienceRepository} from "@/domain/repository/experience.repository";
import {ExperienceService} from "@/domain/service/experience.service";
import {ExperienceController} from "@/controller/experience.controller";
import {SocialRepository} from "@/domain/repository/social.repository";
import {SocialService} from "@/domain/service/social.service";
import {SocialController} from "@/controller/social.controller";

const container: Container = new Container();
// Project
container.bind(ProjectRepository).toSelf().inSingletonScope();
container.bind(ProjectService).toSelf().inSingletonScope();
container.bind(ProjectController).toSelf().inSingletonScope();

// Skill
container.bind(SkillRepository).toSelf().inSingletonScope();
container.bind(SkillService).toSelf().inSingletonScope();
container.bind(SkillController).toSelf().inSingletonScope();

// Experience
container.bind(ExperienceRepository).toSelf().inSingletonScope();
container.bind(ExperienceService).toSelf().inSingletonScope();
container.bind(ExperienceController).toSelf().inSingletonScope();

// Social
container.bind(SocialRepository).toSelf().inSingletonScope();
container.bind(SocialService).toSelf().inSingletonScope();
container.bind(SocialController).toSelf().inSingletonScope();

export default container;
