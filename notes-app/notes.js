const fs = require('fs');

const getNotes = function () {
    return 'I got dem notes doe'
}

const addNote = (title, body) => {
    const notes = loadNotes();

    const titleArray = notes.map(note => note.title);

    titleArray.includes(title) ? console.log('title taken') : 
    notes.push({
        title: title,
        body: body
    });

    saveNotes(notes);
}

const removeNote = async (title) => {
    const notes = loadNotes();
    
    const filteredArray = notes.filter(note => note.title != title);

    saveNotes(filteredArray);

    console.log(loadNotes())

}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const bufferString = dataBuffer.toString();
        return JSON.parse(bufferString);
    } catch (e) {
        return []
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}