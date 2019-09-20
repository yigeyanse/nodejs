const http = require("http");
const server = http.createServer(function (req, res) {
    res.writeHead(200, {
        "Content-Type": "text/html;charset=utf-8"
    });
    res.end("<h1>国庆节快乐</h1>")
});

server.listen(3000,"127.0.0.1");
console.log("服务器运行在3000端口")
