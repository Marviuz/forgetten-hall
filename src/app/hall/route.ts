import { NavigationRoutes } from '@/constants/NavigationRoutes';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  return NextResponse.redirect(
    new URL(`${NavigationRoutes.Hall}/${1}`, request.url)
  );
}
