import { getGallery } from "@/app/lib/gallery/get-gallery";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await getGallery();

    return NextResponse.json({ data: response }, { status: 200 });
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
