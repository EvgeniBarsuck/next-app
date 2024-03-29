import { signUp } from "@/app/lib/firebase/auth/signup";
import { NextResponse } from "next/server";

export const dynamic = 'force-static';

export async function POST(req: any) {
  const body = await req.json();

  try {
    const { email, password } = body;

    await signUp(email, password);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error: any) {
    if (error.status === 401) {
      return NextResponse.json(
        { success: false, message: error.message },
        { status: 401 }
      );
    } else {
      return NextResponse.json({ success: false }, { status: 500 });
    }
  }
}
