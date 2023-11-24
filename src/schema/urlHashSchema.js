"use strict";

async function buildHashTableSchema(database) {
    try{
        await database.schema.createTable('hashtable', (table) => {
            table.increments('id');
            table.string('originalUrl');
            table.string('hashedUrl');
        })
    } catch (error) {
        console.log(error)
    }

}


module.exports = buildHashTableSchema