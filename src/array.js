const arr = [2, 4, 6, 8, 10, 11];

console.log(arr.includes(8));

console.log(
    arr.find(item => item % 2 > 0),
    arr.findIndex(item => item > 8),
);

const names = ['pnlinh', 'linhpn7'];

let items = names.entries();
for (let name of items) console.log(name);
