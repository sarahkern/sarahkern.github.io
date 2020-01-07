var taskcounter: number = 0;
window.addEventListener("load", function () {
    document.querySelector(".addButton").addEventListener("click", AddTaskText);
    document.querySelector(".number").addEventListener("click", AddTaskText);
});
function AddTaskText(): void {
    var newtask: any = document.querySelector(".newtask").value;
    console.log(newtask);
    addTaskToList(newtask); // Aufruf der Funktion drunter
    // Counter:
    var element: Element = document.querySelector(".Rahmen");
    var numberofChildren: number = element.children.length;
    taskcounter = numberofChildren;
    console.log("Die Anzahl der To-Dos lautet:" + numberofChildren);
    document.querySelector(".number").innerHTML = numberofChildren + " in total";
}
function addTaskToList(newTaskValue: any): void {
    var addElement: HTMLDivElement = document.createElement("div");
    addElement.setAttribute("class", "Template");
    addElement.setAttribute("id", "TaskId" + taskcounter); // Template konstruiert
    var myHtmlTemplate: string = ""; // Template Inhalte
    myHtmlTemplate += "<button onclick=\"CheckedButton(this)\" class=\"far fa-circle checkbox\" id=\"circle" + taskcounter + "\"></button>";
    myHtmlTemplate += "<input class=\"firsttask\" id=\"firsttask" + taskcounter + "\" value=\"" + newTaskValue + "\" ></input>";
    myHtmlTemplate += "<button onclick=\"DeleteTaskText(this)\" class=\"far fa-trash-alt trash\" id=\"delete" + taskcounter + "\"></button>";
    addElement.innerHTML = myHtmlTemplate;
    document.querySelector(".Rahmen").appendChild(addElement); // Hinzufügen vom Template
    console.log("addTasktoList:" + newTaskValue);
}
function DeleteTaskText(ClickedTrash: any): void {
    console.log("This is deleating the task");
    ClickedTrash.parentElement.remove(); // div wird bei click auf Tonne gelöscht
    taskcounter--;
    // Counter
    var element: Element = document.querySelector(".Rahmen");
    var numberofChildren: number = element.children.length;
    document.querySelector(".number").innerHTML = numberofChildren + " in total";
}
function CheckedButton(ClickedButton: any): void {
    if (ClickedButton.classList.contains("fa-circle")) {
        ClickedButton.classList.remove("fa-circle");
        ClickedButton.classList.add("fa-check-circle");
    }
    else {
        ClickedButton.classList.remove("fa-check-circle");
        ClickedButton.classList.add("fa-circle");
    }
}