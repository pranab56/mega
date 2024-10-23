// middleware.js
// import { NextResponse } from 'next/server';

// export function middleware(req) {
//   const isAuthenticated = req.cookies.get('isAuthenticated') === 'true';

//   // Check if the user is trying to access the dashboard
//   if (!isAuthenticated && req.nextUrl.pathname === '/Admin_dashboard_mega') {
//     // Redirect to login if not authenticated
//     return NextResponse.redirect(new URL('/Admin_Login', req.url));
//   }

//   return NextResponse.next();
// }

// // Specify the paths to apply middleware
// export const config = {
//   matcher: ['/Admin_dashboard_mega'],
// };
