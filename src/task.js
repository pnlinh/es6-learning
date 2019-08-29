class TaskCollection {
    constructor(tasks = []) {
        this.tasks = tasks;
    }

    prepare() {
        this.tasks.forEach(task => {
            console.log(this);
        });
    }
}

class Task {
    toGulp() {
        console.log('Converting to Gulp');
    }
}

new TaskCollection([
    new Task,
]).prepare();

let names = ['pnlinh', 'linhpn7'];
names = names.map(name => name + ' is a web developer');

console.log(names);
