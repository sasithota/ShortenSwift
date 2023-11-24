// modules
const express = require('express');
const setHandlers = require('./routes/index');

// setup DB
const {createDBConnectionAndBuildSchemas} = require('./db/index');
createDBConnectionAndBuildSchemas();

// setup app
const app = express();
const PORT = 3000;

//middlewares
app.use(express.json())
// setup handlers
setHandlers(app);

// start server
app.listen(PORT, () => {
    console.log("server is up!!!")
})