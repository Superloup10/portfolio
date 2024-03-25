import * as bcrypt from "bcrypt";
import {NextRequest, NextResponse} from "next/server";

export async function POST(request: NextRequest) {
    const password = await request.json();
    const hash = process.env.ADMIN_HASH as string;
    const isValid = await bcrypt.compare(password, hash);
    return NextResponse.json({isValid});
}
