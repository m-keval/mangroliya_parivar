const fs = require('fs');
const path = require('path');

const walk = (dir) => {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('.tsx')) {
      results.push(file);
    }
  });
  return results;
};

const appDir = path.join('d:\\Flutterwork\\mangroliya_parivar\\app');
const files = walk(appDir);

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;

  // Fix crumbs missing closing ]}
  // Currently looks like: crumbs={[{ label: "Village List" }\n      />
  const brokenCrumbsRegex = /crumbs=\{?(\[\{\s*label:\s*"[^"]+"\s*\})\s*\r?\n\s*\/>/g;
  content = content.replace(brokenCrumbsRegex, 'crumbs={$1]}\n      />');

  // There might be some that don't have \n immediately after
  const brokenCrumbsRegex2 = /crumbs=\{?(\[\{\s*label:\s*"[^"]+"\s*\})\s*\/>/g;
  content = content.replace(brokenCrumbsRegex2, 'crumbs={$1]} />');

  if (content !== originalContent) {
    fs.writeFileSync(file, content, 'utf8');
    console.log('Fixed', file);
  }
});
