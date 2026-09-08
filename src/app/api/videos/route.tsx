import { NextResponse } from 'next/server';

export async function GET() {
  const videos: unknown[] = [];

  return NextResponse.json(videos);
}
