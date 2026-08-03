const fs = require('fs');
const path = require('path');
const p = path.join(__dirname, '..', 'TBOU', 'search_data.js');
let s = fs.readFileSync(p, 'utf8');
let objStr = null;
const m = s.match(/window\.TBOU_SEARCH_DATA\s*=\s*(\{[\s\S]*\});?/);
if (m) objStr = m[1];
else {
  const start = s.indexOf('{');
  const end = s.lastIndexOf('}');
  objStr = s.slice(start, end + 1);
}
let data;
try {
  data = JSON.parse(objStr);
} catch (e) {
  try {
    const vm = require('vm');
    data = vm.runInNewContext('(' + objStr + ')');
  } catch (ee) {
    console.error('Failed to parse or evaluate data object:', ee.message);
    process.exit(1);
  }
}
const items = data.items || [];
function normalizeKey(t) {
  return t.normalize('NFD').replace(/\p{M}/gu, '').toLowerCase().trim();
}
function titleCase(t) {
  return t.split(/\s+/).map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(' ');
}
const pools = new Map();
items.forEach(it => {
  const poolField = it.pool || '';
  const parts = poolField.split(',').map(p => p.trim()).filter(Boolean);
  parts.forEach(part => {
    const key = normalizeKey(part);
    if (key && !pools.has(key)) pools.set(key, titleCase(key));
  });
});
const sorted = Array.from(pools.entries()).sort((a,b) => a[1].localeCompare(b[1]));
console.log('DETECTED POOLS (normalized -> display):');
sorted.forEach(([k,v]) => console.log(`${k} -> ${v}`));
console.log('\nDISPLAY LIST ORDERED:');
sorted.map(([k,v])=>v).forEach(d=>console.log(d));
