import { NextRequest, NextResponse } from "next/server";
import { getSessionCookie } from "better-auth/cookies";

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const session = getSessionCookie(req);
  const adminPath = `/${process.env.ADMIN_PATH}`;

  if (!session && pathname.startsWith("/platform")) {
    return NextResponse.redirect(new URL("/sign-in", req.url));
  }

  if (pathname.startsWith(adminPath)) {
    if (!session) {
      return NextResponse.redirect(new URL("/sign-in", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/platform/:path*", "/manage-gsp-m-c/:path*"],
};
