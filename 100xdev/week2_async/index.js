import * as fs from 'fs';

function print(err, data){
    if (err) {
        console.log("File not found!")
    } else {
        console.log(data)
    }
}

