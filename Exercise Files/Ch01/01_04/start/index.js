var fs = require("fs");
var { promisify } = require("util");

var writeFile = promisify(fs.writeFile);

writeFile("sample.txt", "this is a sample")
  .then(() => console.log("file created"))
  .catch((err) => console.log(`error: ${err}`));
