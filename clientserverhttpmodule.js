const http = require('http')
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('<a href = "google.com" >Search On Google</a><h1>Welcome To the home page Jack KIBET</h1>')
        res.end()
    }
    if (req.url === '/about') {
        res.write('<h1>Welcome To the about page Jack KIBET</h1>')
        res.end()
    }
    if (req.url === '/contact') {
        res.write('<h1>OOPS !!! PAGE NOT FOUND TRY AGAIN -ERROR-404</h1>')
        res.end()
    }
})

const  port = 5174;
server.listen(port, () => {
    console.log(`server listening to port: ${port}`);
    
})