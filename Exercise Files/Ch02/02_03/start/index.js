const fs = require("fs");

const readStream = fs.createReadStream("../../powder-day.mp4");

readStream.on("data", (chunk) => {
  console.log("size", chunk.length);
});

readStream.on("end", () => {
  console.log("readStream finished");
});

readStream.on("error", (err) => {
  console.log("there is an error");
  console.error(err);
});

readStream.pause();

process.stdin.on("data", (chunk) => {
  if (chunk.toString().trim() === "finish") {
    readStream.resume();
  }
  readStream.read();
});
