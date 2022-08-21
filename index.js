// making backend server

const http = require("http");
const port =2000;
const hostname="localhost";
/// for home page start ..................................................
const fs=require("fs")
const home = fs.readFileSync("./index.html","utf-8");
const server = http.createServer((request,response,next)=>{

    // console.log(request.url);
    if(request.url==='/'){
      return response.end(home); /// for home page end ..................................................
    }
    if(request.url==='/about'){
       return response.end("<h1>This is my about page<h1>")
    }
    if(request.url==='/contact'){
       return response.end("<h1>This is my contact page<h1>")
    }
    if(request.url==='/service'){
       return response.end("<h1>This is my service page<h1>")
    }
    else {
       return response.end("<h1>404 Page not found</h1> ")
    }

});
server.listen(port,hostname,()=>{
    console.log(`server is working on http://${hostname}:${port})`);
});