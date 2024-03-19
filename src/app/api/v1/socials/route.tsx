import container from "@/lib/inversify.config";
import {SocialController} from "@/controller/social.controller";
import {NextRequest} from "next/server";

export async function GET() {
    const controller = container.get(SocialController);
    return await controller.getSocials();
}

export async function POST(request: NextRequest) {
    const controller = container.get(SocialController);
    return await controller.addSocial(request);
}
