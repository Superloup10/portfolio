"use client"

import {Social} from "@/domain/models/social.dto";
import SocialMediaIcon from "@/components/SocialMediaIcon";
import Link from "next/link";
import useFetch from "@/hooks/useFetch";

export default function SocialIcon() {
    const {data: socials} = useFetch<Social[]>("/api/v1/socials");
    return (
        <div className="flex gap-[5px] mt-[11px]">
            {socials && socials.map(social => (
                <Link key={social.id} href={social.url}>
                    <SocialMediaIcon name={social.name}/>
                </Link>
            ))}
        </div>
    );
}
