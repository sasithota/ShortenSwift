const methodToHandler = require('./endpoints');

const ALLOWED_METHODS = ['get', 'post']

function setCoreHandlers(app, method) {
    const pathToHandler = methodToHandler[method];
    for (let [path, handler] of Object.entries(pathToHandler)){
        app[method](path, handler);
    }
}

// set all http method handlers
function setHandlers(app) {
    ALLOWED_METHODS.forEach(function(method) {
        setCoreHandlers(app, method)
    })
}

module.exports = setHandlers;