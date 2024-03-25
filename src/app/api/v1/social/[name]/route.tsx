import {NextRequest} from "next/server";
import container from "@/lib/inversify.config";
import {SocialController} from "@/controller/social.controller";

export function GET(request: NextRequest) {
    const controller = container.get(SocialController);
    return controller.getSocial(request);
}
