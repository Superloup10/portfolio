import Image from "next/image";
import {Skill} from "@/domain/models/skill.dto";
import Link from "next/link";

export function SkillIcon({skill, width, height}: { skill: Skill, width: number, height: number }) {
    return (
        <Link href={skill.url}>
            <Image src={skill.image_url} alt={skill.name} width={width} height={height}/>
        </Link>
    );
}
