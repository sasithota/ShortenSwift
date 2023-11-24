const getUrl = require('../handlers/getUrl');
const generateHash = require('../handlers/generateHash');

// map path to handler
module.exports = {
    'get': {
        '/:hash': getUrl,
    },
    'post': {
        '/generateHash': generateHash,
    }
}