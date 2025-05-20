

// the real operation we want to promisify
function doAsyncOp(resolve) {
    setTimeout(resolve, 3000);// old callback based async function
}


const p = new Promise(doAsyncOp);

function callback() {
    console.log('3 seconds have passes');
}


