const viewRoutes = require('express').Router()
const path = require('path')

viewRoutes.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'))
})

viewRoutes.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'))
})

module.exports = viewRoutes;