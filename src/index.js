// modules
const express = require('express');
const setHandlers = require('./routes/index');
const knex = require('knex')

const database = knex({
    client: 'pg',
    connection: {
      host: 'postgresdb',
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
    },
  });

async function checkDatabaseConnection() {
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
  
  // Call the function to check the database connection
checkDatabaseConnection();

// setup app
const app = express();
const PORT = 3000;

// setup handlers
setHandlers(app);

// start server
app.listen(PORT, () => {
    console.log("server is up!!!")
})