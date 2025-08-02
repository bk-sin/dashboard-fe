export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.css|.*\\.svg|.*\\.png|.*\\.jpg|.*\\.jpeg|.*\\.webp|.*\\.ico|.*\\.woff|.*\\.woff2|.*\\.ttf|.*\\.eot).*)",
  ],
};
import { auth } from "@/auth";

export default auth((req) => {
  const isAuthRoute = ["/auth/login", "/auth/register"].some((path) =>
    req.nextUrl.pathname.startsWith(path),
  );

  if (req.auth && isAuthRoute) {
    const homeUrl = req.nextUrl.clone();
    homeUrl.pathname = "/";
    homeUrl.search = "";
    return Response.redirect(homeUrl);
  }

  if (!req.auth && !isAuthRoute) {
    const loginUrl = req.nextUrl.clone();
    loginUrl.pathname = "/auth/login";
    loginUrl.searchParams.set("callbackUrl", req.nextUrl.pathname);
    return Response.redirect(loginUrl);
  }
});
