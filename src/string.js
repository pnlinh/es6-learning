let title = 'Red Rising';

// String.includes()
// String.startsWith()
// String.endsWith()
// String.repeat()

if (title.startsWith('i', 5)) {
    console.log('It does');
}

let str = 'fuck you';

let strRepeated = str.repeat(100);
console.log(strRepeated);

let heading = 'The Heading Is Here';
let padder = '='.repeat(10);
console.log(
    `${padder} ${heading} ${padder}`
);
