// const fs=require("fs");
// console.log(fs);

const { readFileSync } = require("fs");

// this is Asynchronous 

// fs.readFile("./file.txt",'utf8',(err, data) =>{
// if(err) throw err;
//   console.log(data);
// });
//console.log("I'M first ");

// const a= fs.readFileSync("./file.txt","utf-8");
// console.log(a);
// console.log("I'M Second ");

const {readFileSync}=require("fs");
const a=readFileSync("./file.txt","utf-8");
console.log(a);
console.log("I'M Second ");
