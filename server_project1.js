 const http=require("http");

 const server= http.createServer(function(req, res){

    /*res.writeHead(200, {"Content-Type":"text/plain"}); 
                                                            //Plain text
    res.end ("Server Project")*/
    /*res.writeHead(200,{"Content_Type":"application/json"}); 
                                                              //jason object
    res.end(
        `{
            "Name": "Mohamed Lamin Jalloh";
            "Country":"Sierra Leone";
            "Hobby": "Football"
        }`
    )*/
    res.writeHead(200,{"content___type":"text/html"});
    res.end (`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
       <h1> This is Awsome!</h1> 
       <h2> You develop muscle memory by practicing</h2>
    </body>
    </html>`)
    
 })

 //server.listen (10000, "127.0.0.1") listening for plain text
 //server.listen (20000, "127.0.0.1") //listening for json object
 server.listen(30000,"127.0.0.1") //listening for HTML page
 //console.log("Project done!")