const http = require("http");

const fs = require("fs");

const url = require("url");

// server

const data = fs.readFileSync("./data.json", "utf-8");
const productDataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
  const pathName = req.url;

  if (pathName === "/overview") {
    res.end("This is overview");
  } else if (pathName === "/product") {
    res.end("this is a product");
  } else if (pathName === "/api") {
    res.writeHead(200, {
      "Content-type": "application/json",
    });

    res.end(data);
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
    });

    res.end("<h1>Page not found</h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("listening from server");
});
