const buildHashTableSchema = require('./urlHashSchema');

// register all schemas here
async function buildAllSchemas(database) {
    await buildHashTableSchema(database);
}


exports.up = buildAllSchemas;

