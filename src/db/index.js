"use strict";

// File to create specific DB connections
const { connectDB, testDBConnection } = require('./knex_connection/index');
const postgresConnectionInfo = require('./postgres/index');

// for initial connection
function createDBConnectionAndBuildSchemas() {
    const database = connectDB(postgresConnectionInfo);

    // test db connection
    testDBConnection(database);

    // apply migrations
    database.migrate.latest();

    // // destory
    // database.destroy();
}

// get connection
function getOrCreateDBConnection() {
    return connectDB(postgresConnectionInfo);
}

module.exports = {createDBConnectionAndBuildSchemas, getOrCreateDBConnection};
