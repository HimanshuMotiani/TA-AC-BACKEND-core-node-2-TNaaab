console.log(__dirname + "/client/index.js")

var http = require("http")
var fs = require("fs");
var qs = require("querystring")
var server = http.createServer(handleRequest);

function handleRequest(req, res) {
    var store = ""

    req.on("data", (chunk) => {
        store = store + chunk;
    })
    req.on("end", () => {
        if (req.method == "GET" && req.url == "/form") {
            res.setHeader("Content-type", "text/html")
            fs.createReadStream("form.html").pipe(res)
        }
        if (req.method == "POST" && req.url == "/form") {
            var formData = qs.parse(store)
            res.setHeader("content-type", "text/html")
            res.write(`<h1>${formData.name}</h1>`)
            res.write(`<h2>${formData.email}</h2>`)
            res.write(`<h3>${formData.age}</h3>`)
        }
    })
}
server.listen(5678, () => { })