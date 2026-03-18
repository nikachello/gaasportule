import { NextRequest, NextResponse } from "next/server";
import { getSessionCookie } from "better-auth/cookies";

export default function proxy(req: NextRequest) {
  const session = getSessionCookie(req);

  console.log("session cookie:", session);
  console.log("all cookies:", req.cookies.getAll());

  if (!session) {
    return NextResponse.redirect(new URL("/sign-in", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/platform/:path*"],
};
