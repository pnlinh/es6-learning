
function *numbers() {
    console.log('Begin');

    yield 1;
    yield 2;
    yield 3;
}

let iterator = numbers();

console.log(iterator.next().value);

function *range(start, end) {
    while (start <= end) {
        yield start;

        start++;
    }
}

for (let i of range(1, 5)) {
    console.log(i);
}
