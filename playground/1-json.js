const fs = require('fs');

const book = {
  title: 'ego is the enemy',
  author: 'Abbas Badshah'
};
const bookJSON = JSON.stringify(book);
fs.writeFileSync('1-json.json', bookJSON);

console.log(bookJSON);
const parseData = JSON.parse(bookJSON);
console.log(parseData.author);
fs.writeFileSync('1-json.json', bookJSON);

