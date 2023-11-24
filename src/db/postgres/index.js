"use strict";

// postgres connection
const connectionInfo = {
    client: "pg",
    host: process.env.DB_HOSTNAME,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    migrations: {
        tableName: 'hashtable',
        directory: '/usr/src/app/src/schema',
    }
}

module.exports = connectionInfo