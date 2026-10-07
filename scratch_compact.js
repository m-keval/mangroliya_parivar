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
    } else if (file.endsWith('page.tsx')) {
      results.push(file);
    }
  });
  return results;
};

const appDir = path.join('d:\\Flutterwork\\mangroliya_parivar\\app');
const pages = walk(appDir);

pages.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;

  // Replace <PageHero ...> ... </PageHero> with <PageHero title=... crumbs=... />
  const heroRegex = /<PageHero([\s\S]*?)>(?:[\s\S]*?)<\/PageHero>/g;
  content = content.replace(heroRegex, (match, props) => {
    const titleMatch = props.match(/title=({[^}]+}|"[^"]+")/);
    const crumbsMatch = props.match(/crumbs={[^}]+}/);
    
    let newHero = '<PageHero\n';
    if (titleMatch) newHero += '        ' + titleMatch[0] + '\n';
    if (crumbsMatch) newHero += '        ' + crumbsMatch[0] + '\n';
    newHero += '      />';
    return newHero;
  });

  // Handle self-closing PageHero <PageHero ... />
  const heroSelfClosingRegex = /<PageHero([^>]*?)\/>/g;
  content = content.replace(heroSelfClosingRegex, (match, props) => {
    const titleMatch = props.match(/title=({[^}]+}|"[^"]+")/);
    const crumbsMatch = props.match(/crumbs={[^}]+}/);
    
    let newHero = '<PageHero\n';
    if (titleMatch) newHero += '        ' + titleMatch[0] + '\n';
    if (crumbsMatch) newHero += '        ' + crumbsMatch[0] + '\n';
    newHero += '      />';
    return newHero;
  });

  // Remove <SectionHeading ... />
  const sectionHeadingRegex = /<SectionHeading[\s\S]*?\/>/g;
  content = content.replace(sectionHeadingRegex, '');

  // Remove unused SectionHeading imports just in case
  content = content.replace(/import { SectionHeading } from "@\/components\/section-heading";\n/g, '');

  if (content !== originalContent) {
    fs.writeFileSync(file, content, 'utf8');
    console.log('Updated', file);
  }
});
