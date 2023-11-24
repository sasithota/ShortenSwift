const { getOrCreateDBConnection } = require('../index');

async function selectColumnBaseOnCondition(table, select, condition) {
    let db, results;
    try {
        db = getOrCreateDBConnection();
        results = await db(table).select(select).where(condition).first();
    } catch (error) {
        console.log('error while querying', error);
    } finally {
        // db.destroy();
    }
    return results;
}

async function insertRowIntoDatabase(table, row) {
    let db;
    try {
        db = await getOrCreateDBConnection();
        await db(table).insert(row);
    } catch (error) {
        console.log('error while inserting', error);
    } finally {
        // db.destroy();
    }
}

module.exports = { selectColumnBaseOnCondition, insertRowIntoDatabase }


