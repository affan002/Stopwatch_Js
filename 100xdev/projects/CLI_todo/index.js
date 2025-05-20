const fs = require('fs');
const { Command } = require('commander');

const program = new Command();

TODO_FILE = 'todos.json'
program
    .name('CLI todo application')
    .description('contains functionality to add/delete todos and also mark them complete')
    .version('0.1.0');

program.command('add_todo')
    .description('adding a task to the json file')
    .argument('<string>', 'task to add')
    .action((task) => {
        fs.readFile(TODO_FILE, 'utf-8', function(err,data) {
            if (err) {
                console.log(err)
            } else {
                tasks = JSON.parse(data)
                tasks.push({
                    'task': task,
                    'done': false
                })
                fs.writeFile(TODO_FILE, JSON.stringify(tasks, null, 2), 'utf-8', (err)=>{
                    if (err) {
                        console.log(err)
                    }
                })
            }
        })
    })

program.command('list_tasks')
    .description('lists all the tasks from the todo.json file')
    .action(() => {
        fs.readFile(TODO_FILE, 'utf-8', function(err,data) {
            if (err) {
                console.log(err);
            } else {
                tasks = JSON.parse(data);
                for (let i=0; i<tasks.length; i++) {
                    task = tasks[i];
                    console.log(task.task);
                    console.log(`task completed: ${task.done}`);
                    console.log("\n")
                }
            }
        })
    })

program.command('delete_task') 
    .description('delete the task')
    .argument('<task_number>', 'number of the task')
    .action((task_number) => {
        fs.readFile(TODO_FILE, 'utf-8', (err,data) => {
            if (err) {
                console.log(err)
            } else {
                tasks = JSON.parse(data);
                if (task_number>tasks.length || task_number<0) {
                    console.log("invalid argument, Try Again!")
                } else {
                    tasks.splice(task_number-1, 1)
                    fs.writeFile(TODO_FILE, JSON.stringify(tasks, null, 2), 'utf-8', (err)=>{
                        if (err) {
                            console.log(err)
                        }
                    })
                }
            }
        })
    })

program.command('complete_task')
    .description('mark a task complete')
    .argument('<task_number>', 'number of the task')
    .action((task_number) => {
        fs.readFile(TODO_FILE, 'utf-8', (err,data) => {
            if (err) {
                console.log(err)
            } else {
                tasks = JSON.parse(data);
                if (task_number>tasks.length || task_number<0) {
                    console.log("invalid argument, Try Again!")
                } else {
                    tasks[task_number].done = true
                    fs.writeFile(TODO_FILE, JSON.stringify(tasks, null, 2), 'utf-8', (err)=>{
                        if (err) {
                            console.log(err)
                        }
                    })
                }
            }
        })
    })
program.parse()