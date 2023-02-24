/**
 * Usage:
 *   node ../tools/json-extractor.js README.md
 */
const fs = require('fs');
const path = require('path');

const markdownFilePath = process.argv[2];
console.warn("Caution: This is a very simple extractor that GPT wrote.  It does not parse \
the chunks and verify their validity.  It does not check if the chunk names are \
proper.\n")

// Read the markdown file path.join(__dirname, markdownFilePath)
fs.readFile(markdownFilePath, 'utf8', (err, markdown) => {
  if (err) throw err;
  
  // Search for JSON chunks using a regular expression
  const jsonRegex =  /```json\s+(\S+)\s+([\s\S]*?)```/g;
  let match;
  while (match = jsonRegex.exec(markdown)) {
    // Extract the JSON code snippet
    const jsonString = match[2];
    const chunkName = match[1];
    // Write the JSON to a separate file path.join(__dirname, `json_chunk_${i}.json`)
    fs.writeFile(`${chunkName}.json`, jsonString, (err) => {
      console.log(`${chunkName}.json`)
      if (err) throw err;
    });
  }
});
