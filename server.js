// Main server file that is run. All respective required() routes are in /routes folder.
const express = require('express')

const app = express()
const PORT = process.env.PORT || 3001;

const htmlRoutes = require('./routes/viewRoutes')
const api = require('./routes/viewRoutes')

const middleware = [
    express.static('public'),
    express.urlencoded({ extended: true }),
    express.json()
]
app.use(middleware)

// All routes
app.use(htmlRoutes)
app.use('/api', api);


app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT})`))