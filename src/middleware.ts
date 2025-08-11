import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getToken } from 'next-auth/jwt'

// This middleware protects all /admin routes
export async function middleware(request: NextRequest) {
    // Decode the token using your NEXTAUTH_SECRET
    const token = await getToken({
        req: request,
        secret: process.env.NEXTAUTH_SECRET,
    })

    // Check if this is an admin route
    const isAdminRoute = request.nextUrl.pathname.startsWith('/admin')

    if (isAdminRoute) {
        // If not logged in or not an admin, redirect
        if (!token || token.role !== 'admin') {
            return NextResponse.redirect(new URL('/', request.url))
        }
    }

    // Allow the request to proceed
    return NextResponse.next()
}

// Only apply middleware to /admin routes
export const config = {
    matcher: ['/admin/:path*'],
}
