var http = require("http");
var server = http.createServer(handleRequest)
var fs = require("fs");
var url = require('url');

var userDir = __dirname + "/users/"

function handleRequest(req, res) {
    store = "";
    req.on("data", (chunk) => {
        store += chunk
    })

    req.on("end", () => {
        if (req.method == "POST" && req.url == "/users") {
            var username = JSON.parse(store).username;
            fs.open(userDir + username + ".json", "wx", (err, fd) => {
                // fd is pointing to newly created file inside users directory
                // once file is created, we can write content to file
                // since store has all the data of the user
                fs.writeFile(fd, store, (err) => {
                    // err indicated file was not written
                    // if no error, file was written successfully
                    // close the file
                    fs.close(fd, (err) => {
                        // if no err, send response to client
                        res.end(`${username} successfully created`);
                    });
                });
            });
        }
        let parsedUrl = url.parse(req.url, true)
        var fileName = parsedUrl.query.username + ".json";
        if (req.method == "GET" && parsedUrl.pathname == "/users") {
            fs.readFile(`./users/${fileName}`, ((err, content) => {
                res.write(content)
                res.end();
            }));
        }
        if (req.method == "DELETE" && parsedUrl.pathname == "/users") {
            fs.unlink(`./users/${fileName}`, ((err) => {
                if (err) console.log(err);
                else {
                    res.end(console.log(`\nDeleted file: ${fileName}`));
                }
            }));
        }
        if(req.method == "PUT" && parsedUrl.pathname == "/users"){
            console.log("aa");
            fs.open(userDir + fileName,"r+",(err,fd)=>{
                fs.ftruncate(fd);
                fs.writeFile(fd, store, (err) => {

            })
        })
    }
    })
}
server.listen(4000, () => { })