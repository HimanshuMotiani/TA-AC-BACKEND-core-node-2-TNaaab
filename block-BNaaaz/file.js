var http = require("http");
var fs = require("fs");
fs.createReadStream("readme.txt")
var server  = http.createServer(handleRequest)
function handleRequest(req,res){
    setTimeout(()=>{
        fs.createReadStream('readme.txt').pipe(res)
    },3000)
}
server.listen(3000,()=>{});
