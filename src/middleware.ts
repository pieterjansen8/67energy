import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req:NextRequest) {
  const { nextUrl } = req;
  if(nextUrl.searchParams.get('locale')){ 
    return NextResponse.next();
  } 
  
  const country = req.headers.get('x-vercel-ip-country') || 'NL';
  nextUrl.searchParams.set('locale', country);
  // Stuur gebruiker door naar URL met locale searchparam
  return NextResponse.redirect(nextUrl);
}