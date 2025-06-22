import { NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import path from 'path';
import Ajv from 'ajv';
import addFormats from 'ajv-formats';

const configPath = path.join(process.cwd(), 'src/lib/game-engine/data/config/game-config.json');
const schemaPath = path.join(process.cwd(), 'src/lib/game-engine/schemas/game-config.schema.json');

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
    const validate = ajv.compile(schema);
    const valid = validate(config);
    if (!valid) {
      return NextResponse.json(
        { error: 'Invalid game config', details: validate.errors },
        { status: 500 }
      );
    }
    return NextResponse.json(config);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to load game config', details: error instanceof Error ? error.message : error },
      { status: 500 }
    );
  }
} 