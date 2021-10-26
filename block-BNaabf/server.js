console.log(__dirname + "/client/index.js")

var http = require("http")
var fs = require("fs");
var qs = require("querystring")
var server = http.createServer(handleRequest);

function handleRequest(req, res) {
    var store= ""
    if (req.method == "GET" && req.url == "/form"){
    res.setHeader("content-type","text/html")
    fs.createReadStream("form.html").pipe(res)
    }
    req.on("data",(chunk)=>{
        store = store + chunk;
    })
    req.on("end",()=>{
        console.log(req.method)
        console.log(req.url)
    var formData = qs.parse(store)
    console.log(formData.name);
    res.setHeader("content-type","text/html")
    //fs.createReadStream("response.html").pipe(formData.name)
    })
}
server.listen(5678, () => { })