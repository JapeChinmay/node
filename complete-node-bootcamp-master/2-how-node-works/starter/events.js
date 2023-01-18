const EventEmitter = require("events");

const http = require("http");

const myEmitter = new EventEmitter();

myEmitter.on("newSale", () => {
  console.log("new sale occured");
});

myEmitter.on("newSale", () => {
  console.log("chiname");
});
myEmitter.on("newSale", (left) => {
  console.log(`left stock is ${left - 1}`);
});
myEmitter.emit("newSale", 10102);

const server = http.createServer();

server.on("request", (req, res) => {
  console.log("yy");
  res.end("ff");
});

server.on("close", () => {
  console.log(clsoed);
});

server.listen(8000, "127.0.0.1", () => {
  console.log("watign");
});
