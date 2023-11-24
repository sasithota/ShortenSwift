const nanoId = require('nano-id');

function generateHashForUrl() {
    return nanoId(10);
}

module.exports = generateHashForUrl