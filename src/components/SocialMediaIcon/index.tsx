import {GithubIcon, GitlabIcon, LinkedinIcon} from "lucide-react";

interface SocialMediaIconProps {
    name: string;
}

export default function SocialMediaIcon({name}: SocialMediaIconProps) {
    switch (name) {
        case "LinkedIn":
            return <LinkedinIcon/>;
        case "GitHub":
            return <GithubIcon/>;
        case "GitLab":
            return <GitlabIcon/>;
        default:
            return (<></>);
    }
}
