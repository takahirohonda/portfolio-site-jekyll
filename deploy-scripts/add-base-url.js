const fs = require('fs');
const path = require('path');

const line = 'baseUrl: /portfolio';
fs.writeFileSync(path.join(__dirname, '../_data/baseUrl.yml'), line);

console.log(`Updated baseUrl successfully`);
console.log(line);

const baseUrl = 'bseurl: "/portfolio"';

fs.appendFileSync(path.join(__dirname, '../_config.yml'), baseUrl);

console.log('Successfully appended the baseurl to config.yml');
console.log(baseUrl);