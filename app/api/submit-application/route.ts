import { submitApplication } from "@/app/_db/actions";
import { WeddingApplicationFormData } from "@/app/_lib/types";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  const parsedBody = (await request.json()) as WeddingApplicationFormData;
  const response = await submitApplication(parsedBody);
  return NextResponse.json(response);
}
