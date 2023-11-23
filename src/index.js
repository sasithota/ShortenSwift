// modules
const express = require('express');
const setHandlers = require('./routes/index');

// setup app
const app = express();
const PORT = 3000;

// setup handlers
setHandlers(app);

// start server
app.listen(PORT, () => {
    console.log("server is up!!!")
})