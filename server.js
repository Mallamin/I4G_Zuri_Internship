const http = require("http");

//create a server with the http variable
const server= http.createServer(function (req, res) {
  //Headers
  //res.writeHead(200, { "Content-Type": "text/plain" });
  //  res.writeHead(200, { "Content-Type":   "application/json"});
  res.writeHead(200,{"Content-Type":"text/html"});
  //send back some information
  //res.end("This is a new server!");
    /*res.end(`{
      "Name": "Me",
      "College":"Somewhere",
      "Occupation": "Some Occupation"
    }`)*/
    res.end(`<html>
    <body style="background:black; text-align:center; color: white;">
    <h1>Give me the ball!</h1>
    <p> That's it!</p>
    </body>

    </html>`)
  
});
//create a port
server.listen(2000, "127.0.0.1");
console.log("This is me!!!");
 