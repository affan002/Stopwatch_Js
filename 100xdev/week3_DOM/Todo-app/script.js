let ctr=1;

function addTodo() {
    const text = document.querySelector("input")
    const value = text.value;

    const newDivEl = document.createElement("div");
    newDivEl.setAttribute("id", ctr);
    newDivEl.innerHTML = `<div>${value}</div><button onclick='deleteTodo(${ctr})'>delete</button>`;
    ctr++;

    document.querySelector("body").appendChild(newDivEl)
}

function deleteTodo(index) {
    const element = document.getElementById(index);
    element.parentNode.removeChild(element)
}