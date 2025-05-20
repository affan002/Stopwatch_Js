// setTimeout(() => {
//     console.log("hi");
//     setTimeout(() => {
//         console.log("hello")
//         setTimeout(() => {
//             console.log("hi there")
//         }, 5000);
//     }, 3000);
// }, 1000);


function setTimeoutPromisified(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

// setTimeoutPromisified(1000).then(() => {
//     console.log("hi");
//     setTimeoutPromisified(3000).then(() => {
//         console.log("hello");
//         setTimeoutPromisified(5000).then(() => {
//             console.log("hi there")
//         })
//     })
// })



// promise chaining
setTimeoutPromisified(1000).then(function() {
    console.log("hi")
    return setTimeoutPromisified(3000)
}).then(function() {
    console.log("hello");
    return setTimeoutPromisified(5000);
}).then(function() {
    console.log("hi there")
}
)