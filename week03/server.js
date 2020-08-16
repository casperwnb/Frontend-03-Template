const http = require("http");

var server = http
  .createServer((request, response) => {
    let body = [];
    request
      .on("error", (err) => {
        console.log(err);
      })
      .on("data", (chunk) => {
        console.log("get data");
        // body.push(Buffer.from(chunk));  // 同下
        body.push(chunk);
      })
      .on("end", () => {
        body = Buffer.concat(body).toString();
        console.log(request.method, request.url, " get data: ", body);
        console.log("send to client");
        response.writeHeader(200, {
          "Content-Type": "text/html",
          // "Transfer-Encoding": "chunked",
        });
        let html = `<html maaa=a >
<head>
    <style>
p.one {
  width:10px;
  color: red;
}
.one > p {
  color: red;
}
a:hover {
  color: green;
}
body div #myid{
    width:100px;
    background-color: #ff5000;
}
body div img{
    width:30px;
    background-color: #ff1111;
}
    </style>
</head>
<body>
    <div>
        <img id="myid" />
        <img />
        <span class="one"> <p > </p> </span>
        <p class="one">abc</p>
        <a > </a>
    </div>
</body>
</html>`;
        response.end(html);
      });
  })
  .listen(8080);
