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

class Arrow_function {
    toGulp() {
        console.log('Converting to Gulp');
    }
}

new TaskCollection([
    new Arrow_function,
]).prepare();

let names = ['pnlinh', 'linhpn7'];
names = names.map(name => name + ' is a web developer');

console.log(names);
