const { after } = require("node:test");

class Promise2 {
    constructor(fn) {
        function afterDone() {
            this.resolve()
        };

        fn(afterDone);
    }

    then(callback) {
        this.resolve = callback
    }
}


console.log("-----top of the file-------")

function timer(resolve) {
    console.log("timer function called");
    setTimeout(function() {
        console.log("callback based timer completed")
        resolve()
    }, 3000);
}

function setTimeoutPromisified(fileName) {
    console.log("setTimeoutPromisified callled");
    return new Promise2(timer)
}

const p = setTimeoutPromisified();

function callback() {
    console.log("timer is done")
}

p.then(callback)

console.log("-----end of file-----")
