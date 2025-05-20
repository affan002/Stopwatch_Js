let todos = []; // in memory space

async function getAllTodo (req, res, next){
    res.json(todos)
}

async function createTodo (req, res, next){
    const description = req.body.description;

    todos.push({
        id: todos.length,
        description: description,
        completed: false
    })

    res.json({
        message: "new todo has been added"
    })
}

async function updateTodo (req, res, next){
    const id = parseInt(req.params.id);
    const newDescription = req.body.description;
    const foundTodo = todos.find(todo => {return (todo.id===id)});
    if (foundTodo) {
        foundTodo.description = newDescription;
        res.json({
            message: 'todo updated successfully'
        })
    } else {
        res.status(404).send({
            message: 'todo id not found'
        })
    }
}

async function deleteTodoById (req, res, next){
    const id = parseInt(req.params.id);
    
    const foundIndex = todos.findIndex((todo) => {return(todo.id===id)})

    if (foundIndex===-1) {
        res.status(403).send({
            message: "todo id not found"
        })
    } else {
        res.json({
            message: "todo deleted successfully"
        })
    }

    todos.splice(foundIndex, 1);

}

async function deleteTodo (req, res, next){
    todos = [];
    res.status(204).send()
}

module.exports = {
    getAllTodo,
    createTodo,
    updateTodo,
    deleteTodo,
    deleteTodoById
};