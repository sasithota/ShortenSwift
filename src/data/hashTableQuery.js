const { selectColumnBaseOnCondition, insertRowIntoDatabase } = require('../db/queries/dBqueryPatters');

const TABLE = 'hashtable';

async function getUrlForHashInDB(hash) {
    const condition = { hashedUrl: hash };
    return await selectColumnBaseOnCondition(TABLE, 'originalUrl', condition);
}

async function setHashForUrlInDB(url, hash) {
    const content = { originalUrl: url, hashedUrl: hash };
    return await insertRowIntoDatabase(TABLE, content);
}

module.exports = { getUrlForHashInDB, setHashForUrlInDB };