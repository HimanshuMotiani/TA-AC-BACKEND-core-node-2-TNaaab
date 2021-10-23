var http = require("http")
var qs = require("querystring")
var server = http.createServer(handleRequest)
function handleRequest(req, res) {
    var dataFormat = req.headers[`content-type`];
    var store = "";

    req.on("data", (chunk) => {
        store += chunk;
    });
    req.on("end", () => {
        if (dataFormat = "application/json") {
            console.log(store);
            res.write(store);
            res.end();
        }
        else if (dataFormat = "application/x-www-form-urlencoded") {
            var parsedData = qs.parse(store);
            res.end(parsedData);
        }
    })
}
server.listen(7000, () => { })