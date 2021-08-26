const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => {
    return 'Your notes...'
}

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote) {
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

const removeNote = (title) => {
    const notes = loadNotes()
    // keep all note that not contain this title
    const isNotesToKeep = notes.filter((note) => note.title !== title)

    if (notes.length > isNotesToKeep.length) {
        saveNotes(isNotesToKeep)
        console.log(chalk.green.inverse('Note removed'))
    } else {
        console.log(chalk.red.inverse('No Note found!'))
    }    
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.yellow.inverse('Your notes'))
    if (notes.length > 0) {
        notes.forEach((note) => console.log('Title: ' + note.title))
    } else {
        console.log('Note is empty')
    }    
}

const readNote = (title) => {
    const notes = loadNotes()
    const isFind = notes.find((note) => note.title === title)
    if (isFind) {
        console.log(chalk.inverse(isFind.title))
        console.log(isFind.body)
    } else {
        console.log(chalk.red.inverse('No note found'))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {

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
    listNotes: listNotes,
    readNote: readNote,
}