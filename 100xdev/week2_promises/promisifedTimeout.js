console.log("-----top of the file-------")

function timer(resolve) {
    console.log("timer function called");
    setTimeout(function() {
        console.log("callback based timer completed")
        resolve()
    }, 3000);
}

function setTimeoutPromisified() {
    console.log("setTimeoutPromisified callled");
    return new Promise(timer)
}

const p = setTimeoutPromisified();

function callback() {
    console.log("timer is done")
}

p.then(callback)

console.log("-----end of file-----")



