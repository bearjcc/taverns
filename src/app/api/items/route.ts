import { NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import path from 'path';
import Ajv from 'ajv';
import addFormats from 'ajv-formats';

  const itemsPath = path.join(process.cwd(), 'data/items.json');
  const schemaPath = path.join(process.cwd(), 'src/lib/schemas/items.schema.json');

export async function GET() {
  try {
    const [itemsRaw, schemaRaw] = await Promise.all([
      readFile(itemsPath, 'utf-8'),
      readFile(schemaPath, 'utf-8'),
    ]);
    const items = JSON.parse(itemsRaw);
    const schema = JSON.parse(schemaRaw);
    const ajv = new Ajv({ allErrors: true });
    addFormats(ajv);
    const validate = ajv.compile(schema);
    const valid = validate(items);
    if (!valid) {
      return NextResponse.json(
        { error: 'Invalid items data', details: validate.errors },
        { status: 500 }
      );
    }
    return NextResponse.json(items);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to load items data', details: error instanceof Error ? error.message : error },
      { status: 500 }
    );
  }
} 