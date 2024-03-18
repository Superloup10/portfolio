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

function bindToContainer(container: Container, classes: any[]) {
    for (let cls of classes) {
        container.bind(cls).toSelf().inSingletonScope();
    }
}

// Project
bindToContainer(container, [ProjectRepository, ProjectService, ProjectController]);

// Skill
bindToContainer(container, [SkillRepository, SkillService, SkillController]);

// Experience
bindToContainer(container, [ExperienceRepository, ExperienceService, ExperienceController]);

// Social
bindToContainer(container, [SocialRepository, SocialService, SocialController]);

export default container;
