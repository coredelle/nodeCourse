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
    handler: function (argv) {
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
    handler: function (argv) {
        notes.removeNote(argv.title);
    }
})

// create read command
yargs.command({
    command: 'read',
    describe: 'read a new note',
    handler: function () {
        console.log('reading a new note')
    }
})

// create delete command
yargs.command({
    command: 'delete',
    describe: 'delete a new note',
    handler: function () {
        console.log('deleting a new note')
    }
})

yargs.parse();