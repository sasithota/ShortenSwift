const { getUrlForHashInDB } = require('../data/hashTableQuery');

async function getUrlForHash(req, res) {
    const hash = req.params.hash;
    const url = await getUrlForHashInDB(hash);
    if (url === undefined) {
        res.json({message: "no such url found"});
    } else {
        res.send({message: `Url for hash: ${url.originalUrl}`});
    }

}

module.exports = getUrlForHash;