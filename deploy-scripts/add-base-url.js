const fs = require('fs');
const path = require('path');

const line = 'baseUrl: /portfolio';
fs.writeFileSync(path.join(__dirname, '../_data/baseUrl.yml'), line);

console.log(`Updated baseUrl successfully`);
console.log(line);