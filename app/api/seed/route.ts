import { seedData } from "@/seed";
import type { NextRequest } from "next/server";

export const dynamic = "force-dynamic";

export const GET = async (request: NextRequest) => {
  try {
    await seedData();

    return new Response("done");
  } catch (e) {
    console.log(e);
    return new Response("failed");
  }
};
