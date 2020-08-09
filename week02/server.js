const http = require("http");

http
  .createServer((request, response) => {
    let body = [];
    request
      .on("error", (err) => {
        console.log(err);
      })
      .on("data", (chunk) => {
        // body.push(chunk.toString());  // wrong, chunk 是buffer类型的, 不需要toString, 以下两种改法都可以

        // body.push(Buffer.from(chunk));
        body.push(chunk);
      })
      .on("end", () => {
        body = Buffer.concat(body).toString();

        console.log("body: ", body);
        response.writeHead(200, {
          "Content-Type": "text/html",
          "Transfer-Encoding": "chunked",
        });
        response.end("Hello, I am Node Server");
      });
  })
  .listen(8080);
