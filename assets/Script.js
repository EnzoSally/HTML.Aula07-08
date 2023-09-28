const tasks = [];

function newId() {
    return Math.floor(Math.random() * 1000);
}

function getTasks() {
    return tasks;  
}

function createTask(taskTitle, taskDescription = "") {
    let id = newId();
    
    let task = {
        id,
        taskTitle: taskTitle, 
        taskDescription: taskDescription,
    }
    
    task.push(task);
    return task;
}
