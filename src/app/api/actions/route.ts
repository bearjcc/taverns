import { NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import path from 'path';
import Ajv from 'ajv';
import addFormats from 'ajv-formats';

const actionsPath = path.join(process.cwd(), 'src/lib/game-engine/data/config/actions.json');
const schemaPath = path.join(process.cwd(), 'src/lib/game-engine/schemas/actions.schema.json');

export async function GET() {
  try {
    const [actionsRaw, schemaRaw] = await Promise.all([
      readFile(actionsPath, 'utf-8'),
      readFile(schemaPath, 'utf-8'),
    ]);
    const actions = JSON.parse(actionsRaw);
    const schema = JSON.parse(schemaRaw);
    const ajv = new Ajv({ allErrors: true });
    addFormats(ajv);
    const validate = ajv.compile(schema);
    const valid = validate(actions);
    if (!valid) {
      return NextResponse.json(
        { error: 'Invalid actions data', details: validate.errors },
        { status: 500 }
      );
    }
    return NextResponse.json(actions);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to load actions data', details: error instanceof Error ? error.message : error },
      { status: 500 }
    );
  }
} 