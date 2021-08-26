const fs = require('fs');
const chalk = require('chalk');

const getNotes = function () {
    return 'Your notes...'
}

const addNote = function (title, body) {
    const notes = loadNotes()
    const isDuplicateNotes = notes.filter(note => note.title === title)

    if (isDuplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body,
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('Note added successfully'))
    } else {
        console.log(chalk.red.inverse('Note title already added'))
    }
    
}

const removeNote = function (title) {
    const notes = loadNotes()
    // keep all note that not contain this title
    const isNotesToKeep = notes.filter(note => note.title !== title)

    if (notes.length > isNotesToKeep.length) {
        saveNotes(isNotesToKeep)
        console.log(chalk.green.inverse('Note removed'))
    } else {
        console.log(chalk.red.inverse('No Note found!'))
    }    
}

const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function () {

    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (err) {
        return []   
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
}