const fs = require('fs');

function makePerson(name, age, address){
    return {
        name,
        age,
        address
    }
}

const george = makePerson('George', 12, '4712 Summit Overlook Drive');

console.log('ORIGINAL GEORGE:', george);

const georgeString = JSON.stringify(george);

console.log('EXPECT STRING:', typeof georgeString);
console.log(georgeString);

const georgeObject = JSON.parse(georgeString);

console.log('EXPECT OBJECT:', typeof georgeObject);
console.log(georgeObject);

fs.writeFileSync('notes.json', georgeString);
readGeorge = JSON.parse(fs.readFileSync('notes.json'));

console.log('READ DATA: ', readGeorge);