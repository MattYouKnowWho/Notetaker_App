const notes = require('express').Router()
const fs = require('fs')

const {
    readFromFile,
    readAndAppend,
    writeToFile,
} = require('../../helpers/fsUtils');

const { v4: uuidv4 } = require('uuid');


notes.get('/', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
})


notes.post('/', (req, res) => {
  

    const { title, text } = req.body;

    if (title, text) {
        const newNote = {
            title,
            text,
            id: uuidv4()
        };
        readAndAppend(newNote, './db/db.json')

        const response = {
            status: 'Response saved into db.json',
            body: newNote
        }
        res.send(response)
    } else {
        res.send(`Error, title or data came out false. Title: ${!!title}, text: ${!!text}`)
    }
})

notes.delete('/:id', (req, res) => {
    const id = req.params.id
    let currentNotes = JSON.parse(fs.readFileSync('./db/db.json', { encoding: 'utf8' }))
    
    currentNotes = currentNotes.filter(note => note.id !== id)

    fs.writeFileSync('./db/db.json', JSON.stringify(currentNotes))
    res.send('Note has been deleted')
})

module.exports = notes;