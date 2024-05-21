import { seedData } from "@/seed";
import { runWithAmplifyServerContext } from "@/utils/amplify";
import { fetchAuthSession } from "aws-amplify/auth/server";
import { NextResponse, type NextRequest } from "next/server";

export const dynamic = "force-dynamic";

export const GET = async (request: NextRequest) => {
  try {
    // const response = NextResponse.next();

    // const authenticated = await runWithAmplifyServerContext({
    //   nextServerContext: { request, response },
    //   operation: async (contextSpec) => {
    //     try {
    //       const session = await fetchAuthSession(contextSpec, {});
    //       return session.tokens !== undefined;
    //     } catch (error) {
    //       console.log(error);
    //       return false;
    //     }
    //   },
    // });

    // console.log("authenticated", authenticated);
    // if (authenticated) {
    await seedData();
    // }

    return new Response("done");
  } catch (e) {
    console.log(e);
    return new Response("failed");
  }
};
