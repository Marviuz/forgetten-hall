import { NextResponse } from 'next/server';
import { NavigationRoutes } from '@/constants/NavigationRoutes';

const REDIRECT_TO_HALL = 1;

export async function GET(request: Request) {
  return NextResponse.redirect(
    new URL(`${NavigationRoutes.Hall}/${REDIRECT_TO_HALL}`, request.url)
  );
}
