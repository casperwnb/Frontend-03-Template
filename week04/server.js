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
  #container {
    width:500px;
    height:300px;
    display:flex;
    background-color: rgb(255,255,255);
}
#container #myid {
  width:200px;
  height:100px;
  background-color:rgb(255,0,0);
}
#container .c1 {
  flex:1;
  background-color:rgb(0,255,0);
}
    </style>
</head>
<body>
    <div id="container">
      <div id="myid"/>
      <div class="c1" />
    </div>
</body>
</html>`;
        response.end(html);
      });
  })
  .listen(8080);
