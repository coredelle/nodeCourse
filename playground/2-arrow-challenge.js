// goal: crete method to get incomplete tasks

// define getTasksToDo method
// use filter to return just the incompleted tasks (arrow function)
// test your work by running the script

const tasks = {
    tasks: [{
        text: 'grocery shopping',
        completed: true
    }, {
        text: 'clean crib',
        completed: false
    }, {
        text: 'goobin',
        completed: false
    }],

    getTasksToDo() {
        return this.tasks.filter(task => task.completed === false);
    }
}

console.log(tasks.getTasksToDo());