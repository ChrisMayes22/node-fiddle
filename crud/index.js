console.log('starting app!')

const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const argv = yargs.argv;
const command = process.argv[2];

switch(command){
    case 'add':
        notes.add(argv.title, argv.body);
        break;
    case 'update':
        notes.update(argv.title, argv.body);
        break;
    case 'list':
        notes.list();
        break;
    case 'read':
        notes.read(argv.title);
        break;
    case 'delete':
        notes.delete(argv.title);
        break;
    default:
    console.log('Command not recognized')
};