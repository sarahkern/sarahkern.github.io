interface ToDos {
    todosText: string;
    todosChecked: boolean;
}
// Statt 2 Arrays Objekt erstellt:
var toDoList: ToDos[] = [
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
var inputDOMElement: HTMLInputElement;
var addButtonDOMElement: HTMLElement;
var todosDOMElement: HTMLElement;
var counterDOMElement: HTMLElement;
//
window.addEventListener("load", function(): void {
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
function drawListToDOM(): void {
    //
    todosDOMElement.innerHTML = "";
    for (let index: number = 0; index < toDoList.length; index++) {

        /** Neues <div> erstellen */
        let todo: HTMLElement = document.createElement("div");
        todo.classList.add("todo");
        //
        todo.innerHTML =  "<span class='check " + toDoList[index].todosChecked + "'><i class='fas fa-check'></i></span>"
                            + toDoList[index].todosText +
                            "<span class='trash fas fa-trash-alt'></span>";

        todo.querySelector(".check").addEventListener("click", function(): void {
            // Von true zu false wechseln:
            toggleCheckState(index);
        });
        todo.querySelector(".trash").addEventListener("click", function(): void {
            // To Do löschen:
            deleteTodo(index);
        });

        // In den DOM ziehen:
        todosDOMElement.appendChild(todo);
    }

    updateCounter();
}
//
function updateCounter(): void {

    var toDoDone: number = 0;
    var toDoOpen: number = 0;

    for (var index: number = 0; index < toDoList.length; index++) {
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
function addTodo(): void {
    
    if (inputDOMElement.value != "") {
        /**
         * Der Eingabe-Wert aus dem Input-Feld (.value) wird als neues Element in das ToDo-Array gepusht.
         * Und der Status "unchecked", hier false, wird ebenfalls gepusht.
         */
        toDoList.unshift ({
        todosText: inputDOMElement.value,
        todosChecked: false
        });
        // Jetzt wird der Text aus dem Eingabefeld gelöscht
        inputDOMElement.value = "";

        drawListToDOM();
    }
}

// Check/Uncheck = true/false:
function toggleCheckState(index: number): void {

    toDoList[index].todosChecked = !toDoList[index].todosChecked;

    drawListToDOM();

}

// To Do löschen:
function deleteTodo(index: number): void {
    
    toDoList.splice(index, 1);
    
    drawListToDOM();
}