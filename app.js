const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter a message</title></head>");
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">SEND</button></input></form></body>'
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/message" && method === "POST") {
    fs.writeFileSync("message.txt", "NODE STUFF!");
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.send();
  }

  res.setHeader("Content-Type", "text/html");
  res.write("NOT SURE!");
});

server.listen(3000);
