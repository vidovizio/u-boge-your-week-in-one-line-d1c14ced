import { mkdirSync, writeFileSync, readFileSync } from 'node:fs';
import { dirname } from 'node:path';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? './out';
const entryPath = `${outputDir}/entry.txt`;

const line = '7 builds, byte-identical twice, 78 chars — Node 22 nods, deadline 01:35 yawns.';

mkdirSync(outputDir, { recursive: true });
writeFileSync(entryPath, line, 'utf8');

const written = readFileSync(entryPath, 'utf8');
const charCount = written.length;
process.stderr.write(`chars: ${charCount}\n`);