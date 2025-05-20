const fs = require('fs');
const { Command } = require('commander')

const program = new Command();

program
    .name('file count operations')
    .description('CLI based file tasks')
    .version('0.8.0')

program.command('count_words')
    .description('counts the number of words in the file')
    .argument('<file>', 'file to count')
    .action((file) => {
        fs.readFile(file, 'utf-8', function(err,content) {
            if (err) {
                console.log(err)
            } else {
            const words = content.split(' ').length
            console.log(`The number of words in this file ${file} are ${words} words`)}
        } )
    })

program.parse()
// const fs = require('fs');

// function main(filename) {
//     fs.readFile(filename, 'utf-8', function(err, data) {
//         let total = 0;
//         // console.log(process.argv)
//         for(let i=0; i<data.length; i++) {
//             if(data[i] === " ") {
//                 total++
//             }
//         }
//         console.log(total+1)
//     })
// }

// main(process.argv[2])