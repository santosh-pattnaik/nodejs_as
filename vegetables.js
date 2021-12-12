const http = require('http');

const fs = require("fs");

const server = http.createServer ((req, res) => {
    if (req.url == "/vegetables") {
          // Read vegetables.json file
        fs.readFile(`${__dirname}/vegetables.json`, "utf-8", (err, data) => {
            res.end(data); 
        });
    } else {
        res.writeHead(404, { "content-type" : "text/html" });
        res.end("<h1>this page is not found</h1>");
    }
});

server.listen(8080, "localhost", () => {
    console.log("listing to server.");  
})