import {NextRequest} from "next/server";
import container from "@/lib/inversify.config";
import {SocialController} from "@/controller/social.controller";

export async function GET(request: NextRequest) {
    const controller = container.get(SocialController);
    return await controller.getSocial(request);
}
