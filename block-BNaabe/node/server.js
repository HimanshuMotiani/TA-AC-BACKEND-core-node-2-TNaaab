console.log(__filename);
let path = require("path");
let http = require("http");
let qs = require("querystring");
console.log(path.join(__dirname, "index.html"));
var server = http.createServer(handleRequest)

function handleRequest(req,res){
    var dataFormat = req.headers['content-type'];
    var store = '';
 req.on("data",(chunk)=>{
     store += chunk
 })
 if(dataFormat == "application/json"){
 req.on("end",()=>{
     res.statusCode = 200;
     res.end(store);
 })
}
if(dataFormat == "application/x-www-form-urlencoded") {
    req.on("end",()=>{
        let parsedData = qs.parse(store)
        res.end(parsedData.captain);
    })
}
}

server.listen(1111,()=>{})

function handleRequest(req, res) {
    var dataFormat = req.headers['content-type'];
    var store = '';
    req.on("data", (chunk) => {
        store += chunk
    })
    if (dataFormat == "application/json") {
        req.on("end", () => {
            res.end(store);
        })
    }
    if (dataFormat == "application/x-www-form-urlencoded") {
        req.on("end", () => {
            let parsedData = qs.parse(store)
            res.end(JSON.stringify(parsedData));
        })
    }
}

function handleRequest(req, res) {
    var dataFormat = req.headers['content-type'];
    var store = '';
    req.on("data", (chunk) => {
        store += chunk
    })
    if (dataFormat == "application/json") {
        req.on("end", () => {
            res.setHeader(`content-Type`, `text/html`)
            res.end(`<h1>${store.name}</h1><h2>${store.email}</h2>`);
        })
    }
    if (dataFormat == "application/x-www-form-urlencoded") {
                req.on("end", () => {
                    let parsedData = JSON.stringify(qs.parse(store))
                    res.end(`<h2>${parsedData.email}</h2>`);
                })
    }
}

server.listen(9000, () => { })