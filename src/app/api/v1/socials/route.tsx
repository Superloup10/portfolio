import container from "@/lib/inversify.config";
import {SocialController} from "@/controller/social.controller";
import {NextRequest} from "next/server";

export function GET() {
    const controller = container.get(SocialController);
    return controller.getSocials();
}

export function POST(request: NextRequest) {
    const controller = container.get(SocialController);
    return controller.addSocial(request);
}
