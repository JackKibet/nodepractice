const http = require('http')

const server = http.createServer((req, res) => {
    res.writeHead(200, {'content-type': 'text/html'})
    res.write('<a>Google</a><h1>Hello jack how are you welcome to your 1st node server</h1> ')
    res.end();
})
server.listen(8080);
console.log(`server running on port: 8080... `);
