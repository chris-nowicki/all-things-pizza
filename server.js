const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const port = 8000

// routes
require('./routes/test.routes')(app)

app.listen(port, () => console.log(`Server running on port ${port}`))

module.exports = app