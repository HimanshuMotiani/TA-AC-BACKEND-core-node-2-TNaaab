//console.log(\_\_dirname);
//console.log(\_\_filename);
//use path module to join `__dirname` and `server.js`
console.log(__dirname);
console.log(__filename);

var path = require("path");

var joinedPath = path.join(__dirname,"server.js")
console.log(joinedPath);