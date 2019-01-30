import {toDoInterface} from './interface';

class toDoClass implements toDoInterface{

    myTasks: Array<string> = [];

    
    addTask (task:string):number{
        return this.myTasks.push(task);
    }

    listAllTask():void{
        console.log("Beginning of an array");
    
        this.myTasks.forEach(function(task){
            console.log(task);
        })
    
        console.log("End of an array");
    }

    deleteTask(task:string):number{
        let index:number = this.myTasks.indexOf(task,0);
    
        if(index > -1){
            this.myTasks.splice(index,1);
        }
        else{
            console.log("item "+task+" not found!");
        }
        return this.myTasks.length;
        
    }

}

let testClass = new toDoClass();
testClass.addTask("element1");
testClass.addTask("element2");
testClass.addTask("element3");
testClass.deleteTask("element2");
testClass.listAllTask();