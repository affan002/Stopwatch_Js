const fs = require('fs')

function expensiveOp() {
    let c=0;
    for (let i=0; i<1000000000; i++) {
        c++
    }
}

fs.writeFile("b.txt", "I'm Affan", (err) => {
    if (err) {
        console.log("there was an error in writing the file");
        return;
    }
    console.log("Data has been written onto the file")
})

expensiveOp()