import { NextResponse } from 'next/server'

export function middleware(request) {
    const token = request.cookies.get('auth_token')?.value

    // Protect /invitados routes
    if (request.nextUrl.pathname.startsWith('/invitados')) {
        if (!token) {
            return NextResponse.redirect(new URL('/login', request.url))
        }
    }

    // Redirect to /invitados if already logged in
    if (request.nextUrl.pathname === '/login') {
        if (token) {
            return NextResponse.redirect(new URL('/invitados', request.url))
        }
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/invitados/:path*', '/login'],
}
