var myTasks = [];
function addTask(task) {
    return myTasks.push(task);
}
function listAllTask() {
    console.log("Beginning of an array");
    myTasks.forEach(function (task) {
        console.log(task);
    });
    console.log("End of an array");
}
function deleteTask(task) {
    var index = myTasks.indexOf(task, 0);
    if (index > -1) {
        myTasks.splice(index, 1);
    }
    else {
        console.log("item " + task + " not found!");
    }
    return myTasks.length;
}
addTask("element1");
addTask("element2");
addTask("element3");
listAllTask();
deleteTask("element2");
listAllTask();
