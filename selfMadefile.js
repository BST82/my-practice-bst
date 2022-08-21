const fs = require("fs");
const a="This is my self made file with help of coding";
fs.writeFile("./selfmade.txt",a,()=>{
console.log("write");
});