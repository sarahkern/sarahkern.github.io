var taskcounter = 0;
window.addEventListener("load", function () {
    document.querySelector(".adden").addEventListener("click", AddTaskText);
    document.querySelector(".nummer").addEventListener("click", AddTaskText);
});
function AddTaskText() {
    var newtask = document.querySelector(".neueaufgabe").value;
    console.log(newtask);
    addTaskToList(newtask);
    var element = document.querySelector(".Rahmen");
    var numberofChildren = element.children.length;
    taskcounter = numberofChildren;
    console.log("Die Anzahl der To-Dos lautet:" + numberofChildren);
    document.querySelector(".nummer").innerHTML = numberofChildren + " in total";
}
function addTaskToList(newTaskValue) {
    var addElement = document.createElement("div");
    addElement.setAttribute("class", "Template");
    addElement.setAttribute("id", "TaskId" + taskcounter);
    var myHtmlTemplate = "";
    myHtmlTemplate += "<button onclick=\"CheckedButton(this)\" class=\"far fa-circle checkbox\" id=\"circle" + taskcounter + "\"></button>";
    myHtmlTemplate += "<input class=\"firsttask\" id=\"firsttask" + taskcounter + "\" value=\"" + newTaskValue + "\" ></input>";
    myHtmlTemplate += "<button onclick=\"DeleteTaskText(this)\" class=\"far fa-trash-alt trash\" id=\"delete" + taskcounter + "\"></button>";
    addElement.innerHTML = myHtmlTemplate;
    document.querySelector(".Rahmen").appendChild(addElement);
    console.log("addTasktoList:" + newTaskValue);
}
function DeleteTaskText(ClickedTrash) {
    console.log("This is deleating the task");
    ClickedTrash.parentElement.remove();
    taskcounter--;
    var element = document.querySelector(".Rahmen");
    var numberofChildren = element.children.length;
    document.querySelector(".nummer").innerHTML = numberofChildren + " in total";
}
function CheckedButton(ClickedButton) {
    if (ClickedButton.classList.contains("fa-circle")) {
        ClickedButton.classList.remove("fa-circle");
        ClickedButton.classList.add("fa-check-circle");
    }
    else {
        ClickedButton.classList.remove("fa-check-circle");
        ClickedButton.classList.add("fa-circle");
    }
}
//# sourceMappingURL=typescript.js.map