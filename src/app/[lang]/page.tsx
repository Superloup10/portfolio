import SkillCard from "@/components/SkillCard";
import Link from "next/link";
import SocialIcon from "@/components/SocialIcon";
import ProjectCard from "@/components/ProjectCard";
import ExperienceCard from "@/components/ExperienceCard";
import ScrollTopButton from "@/components/ScrollTopButton";

export default function Home() {
    return (
        <main className="px-[21px]">
            <div className="flex flex-col items-center">
                <h1 className="font-bold text-[40px] p-2.5">Damien ANDRÉ</h1>
                <h2>Concepteur Développeur d\'Applications</h2>
                <SocialIcon/>
                <Link className="border-2 rounded-[20px] border-black dark:border-white p-2.5 text-[12px] mt-6"
                      href="#">
                    Télécharger mon CV
                </Link>
            </div>
            <SkillCard/>
            <ProjectCard/>
            <ExperienceCard/>
            <ScrollTopButton/>
        </main>
    );
}
