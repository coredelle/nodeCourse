const fs = require('fs');

const getNotes = function () {
    return 'I got dem notes doe'
}

const addNote = (title, body) => {
    const notes = loadNotes();
    console.log(notes);
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync(notes.json);
        const bufferString = dataBuffer.toString();
        return JSON.parse(bufferString);
    } catch (e) {
        return []
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote
}