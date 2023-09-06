/**
 * Usage:
 *   node bash-script-extractor.js README.md
 */

const fs = require('fs');
const path = require('path');
const markdownFilePath = process.argv[2];

console.warn("Caution: This is a very simple extractor that GPT wrote. It does not parse \
the chunks and verify their validity. It does not check if the chunk names are \
proper.\n");

// Read the markdown file path.join(__dirname, markdownFilePath)
fs.readFile(markdownFilePath, 'utf8', (err, markdown) => {
  if (err) throw err;

  // Search for bash script chunks using a regular expression
  const bashRegex = /```bash\s+([\s\S]*?)```/g;
  
  let match;
  let concatenatedScripts = '';
  
  while (match = bashRegex.exec(markdown)) {
    // Extract the bash script snippet
    const bashSnippet = match[1];

    // Concatenate the extracted bash script chunks
    concatenatedScripts += bashSnippet + '\n';
  }

  // Write the concatenated bash scripts to the file "scripts.sh"
  fs.writeFile('scripts.sh', concatenatedScripts, (err) => {
    if (err) throw err;
    console.log('scripts.sh has been created');
  });
});
