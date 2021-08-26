const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js');

// Customize yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
    command: 'add',
    description: 'Add a new node',
    builders: {
        title: {
            description: 'Note title',
            demandOptions: true,
            type: 'string',
        },
        body: {
            description: 'Note Body',
            demandOptions: true,
            type: 'string',
        }
    },
    handler: (argv) => {
        notes.addNote(argv.title, argv.body)
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    description: 'Removing a node',
    builders: {
        title: {
            description: 'Note title',
            demandOptions: true,
            type: 'string',
        }
    },
    handler: (argv) => {
        notes.removeNote(argv.title)
    }

})

// Create read command
yargs.command({
    command: 'read',
    description: 'Reading a note',
    builders: {
        title: {
            description: 'Note title',
            demandOptions: true,
            type: 'string',
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

// Create list command
yargs.command({
    command: 'list',
    description: 'Listing a node',
    handler() {
        notes.listNotes()
    }
})


yargs.parse()

// add, remove, read, list

// console.log(yargs.argv)