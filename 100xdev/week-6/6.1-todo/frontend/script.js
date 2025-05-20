const API_URL = 'http://localhost:3001/todos';

// Fetch existing todos when the page loads
document.addEventListener('DOMContentLoaded', () => {
    fetchTodos();
});

// Fetch todos from backend
async function fetchTodos() {
    const response = await axios.get(API_URL);

    

}

// Add a new todo to the DOM
function addTodoToDOM(todo) {
    //  write here
}

// Add a new todo
document.getElementById('add-todo-btn').addEventListener('click', () => {
    //  write here
});

// Toggle todo completion
function toggleTodo(id, completed) {
//    write here
}

// Delete a todo
function deleteTodo(id) {
    // write here  
}
