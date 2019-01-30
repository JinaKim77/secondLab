let myTasks: Array<string> = [];

function addTask (task:string):number{
    return myTasks.push(task);

}
    
function listAllTask(){
    console.log("Beginning of an array");

    myTasks.forEach(function(task){
        console.log(task);
    })

    console.log("End of an array");
}

function deleteTask(task:string):number{
    let index:number = myTasks.indexOf(task,0);

    if(index > -1){
        myTasks.splice(index,1);
    }
    else{
        console.log("item "+task+" not found!");
    }
    return myTasks.length;
    
}

addTask("element1");
addTask("element2");
addTask("element3");
listAllTask();
deleteTask("element2");
listAllTask();
