"use strict";
exports.__esModule = true;
var toDoClass = /** @class */ (function () {
    function toDoClass() {
        this.myTasks = [];
    }
    toDoClass.prototype.addTask = function (task) {
        return this.myTasks.push(task);
    };
    toDoClass.prototype.listAllTask = function () {
        console.log("Beginning of an array");
        this.myTasks.forEach(function (task) {
            console.log(task);
        });
        console.log("End of an array");
    };
    toDoClass.prototype.deleteTask = function (task) {
        var index = this.myTasks.indexOf(task, 0);
        if (index > -1) {
            this.myTasks.splice(index, 1);
        }
        else {
            console.log("item " + task + " not found!");
        }
        return this.myTasks.length;
    };
    return toDoClass;
}());
var testClass = new toDoClass();
testClass.addTask("element1");
testClass.addTask("element2");
testClass.addTask("element3");
testClass.deleteTask("element2");
testClass.listAllTask();
