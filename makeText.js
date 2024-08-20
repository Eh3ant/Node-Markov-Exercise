/** Command-line tool to generate Markov text. */
const fs = require('fs')
const axios = require('axios')

const { MarkovMachine } = require('./markov')


function generateTextFromFile(filePath) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.log(`Error reading file ${filePath}: ${err.message}`);
            process.exit(1);
        } else {
            let mm = new MarkovMachine(data);
            console.log(mm.makeText());
        }
    });
}


let [type, path] = process.argv.slice(2);

if (type === 'file') {
    generateTextFromFile(path);
} else if (type === 'url') {
    generateTextFromFile(path);
} else {
    console.error(`Unknown command: ${type}`)
    console.error('Usage: node makeText.js <file|url> <path>');
    process.exit(1);
}
