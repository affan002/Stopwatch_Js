let count = 1;

function callback() {
    console.clear();
    console.log(count);
    count+=1;
    setTimeout(callback, 1000);
}

setTimeout(callback, 1000);