// get methods
function getUrl(request, response) {
    response.send("hello world");
}

// map path to handler
module.exports = {
    'get': {
        '/get_url': getUrl
    }
}