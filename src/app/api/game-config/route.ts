import { NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import path from 'path';
import Ajv from 'ajv';
import addFormats from 'ajv-formats';

  const configPath = path.join(process.cwd(), 'data/config/game-config.json');
  const schemaPath = path.join(process.cwd(), 'src/lib/schemas/game-config.schema.json');

export async function GET() {
  try {
    const [configRaw, schemaRaw] = await Promise.all([
      readFile(configPath, 'utf-8'),
      readFile(schemaPath, 'utf-8'),
    ]);
    const config = JSON.parse(configRaw);
    const schema = JSON.parse(schemaRaw);
    const ajv = new Ajv({ allErrors: true });
    addFormats(ajv);

    if (!ajv.validate(schema, config)) {
      console.error('Game config validation failed:', ajv.errors);
      return NextResponse.json(
        { error: 'Invalid game configuration', details: ajv.errors },
        { status: 500 }
      );
    }

    // Add caching headers for static configuration data
    const response = NextResponse.json(config);
    response.headers.set('Cache-Control', 'public, max-age=3600, s-maxage=86400'); // 1 hour client, 24 hours CDN
    response.headers.set('ETag', `"${Buffer.from(configRaw).toString('base64').slice(0, 8)}"`);
    
    return response;
  } catch (error) {
    console.error('Failed to load game config:', error);
    return NextResponse.json(
      { error: 'Failed to load game configuration' },
      { status: 500 }
    );
  }
} 