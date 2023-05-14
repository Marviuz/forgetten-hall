import { NextResponse } from 'next/server';
import { NavigationRoutes } from '@/constants/NavigationRoutes';

export async function GET(request: Request) {
  return NextResponse.redirect(
    new URL(`${NavigationRoutes.Hall}/${1}`, request.url)
  );
}
