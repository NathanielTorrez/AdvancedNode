const { createReadStream, createWriteStream } = require("fs");

const writeStream = createWriteStream("./file.txt");

// readStream.pipe(writeStream).on("error", (err) => console.error(err));

process.stdin.pipe(writeStream);
