var http = require("http");
var fs = require("fs");
fs.createReadStream("readme.txt")
var server  = http.createServer(handleRequest)
function handleRequest(req,res){
        fs.createReadStream('readme.txt').pipe(res)
}
server.listen(3000,()=>{});
