import { authMiddleware } from "@clerk/nextjs";



export default authMiddleware({
    publicRoutes: ["/", "/About", "/Careers", "/Contact", "/Life", "/Locations", "/Policy", "/Search", "/Team", "/Services"],
});

export const config = {
    matcher: ['/sign-in', '/sign-up', '/(api|trpc)(.*)'],
};