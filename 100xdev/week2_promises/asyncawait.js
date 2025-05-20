function setTimeoutPromisified(ms) {
    return new Promise(function(resolve) {
        setTimeout(resolve, ms);
    })
}

async function solve() {
    //still returns a promise
    await setTimeoutPromisified(1000);
    console.log("hi");
    await setTimeoutPromisified(3000);
    console.log("hello");
    await setTimeoutPromisified(5000);
    console.log("hi there");
}

solve()


// the thread doesn't get stuck
console.log("after solve function")
