console.log('starting app!')

const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const argv = yargs.argv;
const command = process.argv[2];

if(command === 'add') {
    notes.add(argv.title, argv.body);
} else if (command === 'list') {
    notes.list();
} else if (command === 'read') {
    notes.read(argv.title);
} else if (command === 'delete') {
    notes.delete(argv.title);
} else {
    console.log('Command not recognized.')
}

// fs.appendFileSync('notes.js', 'function add(a, b){ return a + b }');