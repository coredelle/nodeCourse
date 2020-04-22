const yargs = require('yargs');
const notes = require('./notes');
const chalk = require('chalk');

//set yargs version
yargs.version('1.1.0');

// should be able to add, remove, read, and list


// create add command
yargs.command({
    command: 'add',
    describe: 'add a new note',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

// create remove command
yargs.command({
    command: 'remove',
    describe: 'remove a new note',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title);
    }
})

// create read command
yargs.command({
    command: 'list',
    describe: 'list all notes',
    handler() {
        notes.listNotes();
    }
})

// create delete command
yargs.command({
    command: 'read',
    describe: 'read a note',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title);
    }
})

yargs.parse();