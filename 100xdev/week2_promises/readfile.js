const fs = require("fs");

function readFilePromisified(fileName) {
    return new Promise((resolve) => {
        fs.readFile(fileName, "utf-8", function(err,content) {
            resolve(content)
        })
    })
}


function printContent(contents) {
    console.log(contents)
}   

const p = readFilePromisified("b.txt");
p.then(printContent)