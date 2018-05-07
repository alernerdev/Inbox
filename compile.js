const path = require('path');
const fs = require('fs');
const solc = require('solc');

// need to read in the .sol file
// cant simply require it since its not a js file
const numContracts = 1;

const inboxPath = path.resolve(__dirname, 'contracts', 'inbox.sol');
const source = fs.readFileSync(inboxPath, 'utf8');

module.exports = solc.compile(source, numContracts).contracts[':Inbox'];

