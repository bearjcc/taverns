import { NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import path from 'path';
import Ajv from 'ajv';
import addFormats from 'ajv-formats';

  const skillsPath = path.join(process.cwd(), 'data/skills.json');
  const schemaPath = path.join(process.cwd(), 'src/lib/schemas/skills.schema.json');

export async function GET() {
  try {
    const [skillsRaw, schemaRaw] = await Promise.all([
      readFile(skillsPath, 'utf-8'),
      readFile(schemaPath, 'utf-8'),
    ]);
    const skills = JSON.parse(skillsRaw);
    const schema = JSON.parse(schemaRaw);
    const ajv = new Ajv({ allErrors: true });
    addFormats(ajv);
    const validate = ajv.compile(schema);
    const valid = validate(skills);
    if (!valid) {
      return NextResponse.json(
        { error: 'Invalid skills data', details: validate.errors },
        { status: 500 }
      );
    }
    return NextResponse.json(skills);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to load skills data', details: error instanceof Error ? error.message : error },
      { status: 500 }
    );
  }
} 