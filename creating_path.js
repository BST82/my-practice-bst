const { join } = require("path");
const path = require("path");

//const a=path.extname("/creating_path/index.js"); // give extension

// const a=path.basename("C:/Users/Ashu/Desktop/NodeJs>");  // this return basefolder 

// const a= path.dirname("C:/Users/Ashu/Desktop/NodeJs>");  // it will return directories 

// b="/bst";
// const a = path.join("C:/Users/Ashu/Desktop/NodeJs>"+b);   // join two urls // get new url folder 
// console.log(a);

const os = require("os");  // return remaining memory size 
console.log(os.freemem());  // return remaining memory size 
console.log(os.hostname()); // return computer name;