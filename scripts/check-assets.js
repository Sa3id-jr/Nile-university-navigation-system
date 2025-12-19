import fs from 'node:fs';

function fail(msg) {
    console.error(msg);
    process.exit(1);
}

const requiredFiles = [
    'index.html',
    'floor-1.png'
];

for (const f of requiredFiles) {
    if (!fs.existsSync(f)) fail(`Missing required file: ${f}`);
}

const html = fs.readFileSync('index.html', 'utf8');

// Check for Git conflict markers (must appear at start of line)
const conflictPattern = /^(<{7}|={7}|>{7})/m;
if (conflictPattern.test(html)) {
    fail('index.html contains merge conflict markers.');
}


if (!html.includes('L.imageOverlay(\'floor-1.png\'') && !html.includes('L.imageOverlay("floor-1.png"')) {
    fail('index.html does not reference floor-1.png via L.imageOverlay (expected).');
}

console.log('✅ Asset checks passed.');
