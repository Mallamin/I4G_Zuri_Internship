const http = require('http');
const fs = require ('fs');
// Create ReadStream
//const dataReadStream = fs.createReadStream(`${_dirname}/data.json`, 'utf8');
const dataReadStream = fs.createReadStream(`${__dirname}/data.json`);
// Write Stream
//const dataWriteStream = fs.createWriteStream(`${__dirname}/write.txt`);
dataReadStream.on('data',(chunk)=>{
    console.log("new chunk received!!");
console.log(chunk);
//write stream
//dataWriteStream.write(chunk);
})
//PIPE
//dataReadStream.pipe(dataWriteStream);
//send pipe stream to client
// const server = http.createServer((req, res)=>{
    // res.writeHead(200,{'Content-Type':'text/plain'});
    //const dataReadStream = fs.createReadStream(`${_dirname}/data.json`, 'utf8');
    //dataReadStream.pipe(res)
//})
