const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
require('dotenv').config()
const router = require('./routes');
const errorHandler = require('./utils/errorHanles');

const app = express()

app.use(express.json())
app.use(helmet({
    crossOriginIsolated: false
}))
app.use(cors())



app.get('/', (req,res) => {
    return res.send('Welcome a one new Node app')
})

app.use('/api/v1', router)

//errorHandler
app.use(errorHandler)


module.exports = app;