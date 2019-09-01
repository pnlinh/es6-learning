'use strict';

class TaskCollection {
    constructor(tasks = []) {
        this.tasks = tasks;
    }

    dump() {
        console.log(this.tasks);
    }
}

new TaskCollection([
    'code',
    'eat',
    'sleep',
]).dump();
