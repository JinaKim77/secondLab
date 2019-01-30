export interface toDoInterface{
    myTasks:Array<string>;
    addTask(task:string):number;
    listAllTask():void;
    deleteTask(task:string):number;
}