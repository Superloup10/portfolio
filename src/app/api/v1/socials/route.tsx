import container from "@/lib/inversify.config";
import {SocialController} from "@/controller/social.controller";

export async function GET() {
    const controller = container.get(SocialController);
    return await controller.getSocials();
}
