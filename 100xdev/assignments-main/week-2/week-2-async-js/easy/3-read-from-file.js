const fs = require("fs");

fs.readFile("./b.txt", "utf-8", function(err,data) {
    console.log(data)
})

let c=0;
for(let i=1; i<10000000000; i++) {
    c++
}