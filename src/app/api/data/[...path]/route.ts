import { NextRequest, NextResponse } from 'next/server';
import { readFileSync } from 'fs';
import { join } from 'path';

export async function GET(
  request: NextRequest,
  { params }: { params: { path: string[] } }
) {
  try {
    const filePath = join(process.cwd(), 'data', ...params.path);
    const fileContent = readFileSync(filePath, 'utf-8');
    
    // Parse JSON to validate it's valid
    const jsonData = JSON.parse(fileContent);
    
    return NextResponse.json(jsonData, {
      headers: {
        'Cache-Control': 'public, max-age=3600, s-maxage=3600',
      },
    });
  } catch (error) {
    console.error(`Failed to load data file: ${params.path.join('/')}`, error);
    return NextResponse.json(
      { error: 'File not found or invalid JSON' },
      { status: 404 }
    );
  }
} 