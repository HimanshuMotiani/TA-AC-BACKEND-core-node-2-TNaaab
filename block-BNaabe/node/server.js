console.log(__filename);
console.log(__dirname + "/app.js");
console.log("./index.html");
let path = require("path");
let http = require("http");
let qs = require("querystring");
console.log(path.join(__dirname, "index.html"));
var server = http.createServer(handleRequest)

function handleRequest(req, res) {
    var dataFormat = req.headers['content-type'];
    var store = '';
    req.on("data", (chunk) => {
        store += chunk
    })

    req.on("end", () => {
        if (dataFormat == "application/json") {
            res.statusCode = 200;
            res.end(store);
        }
        if (dataFormat == "application/x-www-form-urlencoded") {
            let parsedData = qs.parse(store)
            res.end(parsedData.captain);
        }
    })
}

server.listen(1111, () => { })

function handleRequest(req, res) {
    var dataFormat = req.headers['content-type'];
    var store = '';
    req.on("data", (chunk) => {
        store += chunk
    })

    req.on("end", () => {
        if (dataFormat == "application/json") {
            res.end(store);
        }
        if (dataFormat == "application/x-www-form-urlencoded") {
            let parsedData = qs.parse(store)
            res.end(JSON.stringify(parsedData));
        }
    })
}


function handleRequest(req, res) {
    var dataFormat = req.headers['content-type'];
    var store = '';
    req.on("data", (chunk) => {
        store += chunk
    })
    req.on("end", () => {
        if (dataFormat == "application/json") {
            res.setHeader(`content-Type`, `text/html`)
            var jsonData = JSON.parse(store)
            res.end(`<h1>${jsonData.name}</h1><h2>${jsonData.email}</h2>`);
        }
        if (dataFormat == "application/x-www-form-urlencoded") {
            res.setHeader(`Content-Type`, `text/html`)
            let formData = qs.parse(store);
            res.end(`<h2>${formData.email}</h2>`);
        }
    })

}

 server.listen(9000, () => { })