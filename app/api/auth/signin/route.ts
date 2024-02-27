import { signIn } from "@/app/lib/firebase/auth/signin";
import { NextResponse } from "next/server";

export async fu nction POST(req: any) {
  const body = await req.json();
  try {
    const { email, password } = body;

    await signIn(email, password);

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
