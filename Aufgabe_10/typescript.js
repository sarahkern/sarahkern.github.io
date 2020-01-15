// Statt 2 Arrays Objekt erstellt:
var toDoList = [
    {
        todosText: "Kuchen backen",
        todosChecked: false
    },
    {
        todosText: "EIA Hausaufgabe",
        todosChecked: true
    },
    {
        todosText: "Fitnessstudio",
        todosChecked: false
    }
];
//
var inputDOMElement;
var addButtonDOMElement;
var todosDOMElement;
var counterDOMElement;
//
window.addEventListener("load", function () {
    //
    inputDOMElement = document.querySelector("#inputTodo");
    addButtonDOMElement = document.querySelector("#addButton");
    todosDOMElement = document.querySelector("#todos");
    counterDOMElement = document.querySelector("#counter");
    //
    addButtonDOMElement.addEventListener("click", addTodo);
    /** neue To Dos in den DOM ziehen: */
    drawListToDOM();
});
//
function drawListToDOM() {
    //
    todosDOMElement.innerHTML = "";
    var _loop_1 = function (index) {
        /** Neues <div> erstellen */
        var todo = document.createElement("div");
        todo.classList.add("todo");
        //
        todo.innerHTML = "<span class='check " + toDoList[index].todosChecked + "'><i class='fas fa-check'></i></span>"
            + toDoList[index].todosText +
            "<span class='trash fas fa-trash-alt'></span>";
        todo.querySelector(".check").addEventListener("click", function () {
            // Von true zu false wechseln:
            toggleCheckState(index);
        });
        todo.querySelector(".trash").addEventListener("click", function () {
            // To Do löschen:
            deleteTodo(index);
        });
        // In den DOM ziehen:
        todosDOMElement.appendChild(todo);
    };
    for (var index = 0; index < toDoList.length; index++) {
        _loop_1(index);
    }
    updateCounter();
}
//
function updateCounter() {
    var toDoDone = 0;
    var toDoOpen = 0;
    for (var index = 0; index < toDoList.length; index++) {
        if (toDoList[index].todosChecked == true) {
            toDoDone++;
        }
        else {
            toDoOpen++;
        }
    }
    counterDOMElement.innerHTML = toDoList.length + " in total | " + toDoDone + " done | " + toDoOpen + " open";
}
//
function addTodo() {
    if (inputDOMElement.value != "") {
        /**
         * Der Eingabe-Wert aus dem Input-Feld (.value) wird als neues Element in das ToDo-Array gepusht.
         * Und der Status "unchecked", hier false, wird ebenfalls gepusht.
         */
        toDoList.unshift({
            todosText: inputDOMElement.value,
            todosChecked: false
        });
        // Jetzt wird der Text aus dem Eingabefeld gelöscht
        inputDOMElement.value = "";
        drawListToDOM();
    }
}
// Check/Uncheck = true/false:
function toggleCheckState(index) {
    toDoList[index].todosChecked = !toDoList[index].todosChecked;
    drawListToDOM();
}
// To Do löschen:
function deleteTodo(index) {
    toDoList.splice(index, 1);
    drawListToDOM();
}
//# sourceMappingURL=typescript.js.map