const generateHashForUrl = require('../core/generateHash');
const { setHashForUrlInDB } = require('../data/hashTableQuery');

async function generateAndPersistHash(req, res) {
    const url = req.body.url;

    const hash = generateHashForUrl();
    await setHashForUrlInDB(url, hash);
    res.json({message: `The hash for the url: ${hash}`});
}

module.exports = generateAndPersistHash