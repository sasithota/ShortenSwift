"use strict";

const knex = require('knex');

/**
 * @typedef {Object} DBConnectionInfo
 * @property {string} client
 * @property {string} host
 * @property {number} user
 * @property {Object} password
 * @property {string} database
 */

function connectDB(connectionInfo){
    const database = knex({
        client: connectionInfo.client,
        connection: {
          host: connectionInfo.host,
          user: connectionInfo.user,
          password: connectionInfo.password,
          database: connectionInfo.database,
        },
        migrations: connectionInfo.migrations,
      });

    return database;
}


// To test the db connection
async function testDBConnection(database) {
    try {
        await database.raw('SELECT 1');
        console.log('Database connection is up!');
    } catch (error) {
        console.error('Error connecting to the database:', error.message);
    } finally {
        // Always destroy the connection pool after checking
        await database.destroy();
    }
}

module.exports = {connectDB, testDBConnection}
