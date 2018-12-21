const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const { sequelize } = require('./models')
// const passportConfig = require('./passport')
const config = require('./config/config')
// const logger = require('./logger')
const helmet = require('helmet')
const hpp = require('hpp')

const app = express()
app.use(morgan('combined')) // print log client infos
app.use(bodyParser.json())
app.use(cors())
// app.use(logger)
app.use(helmet())
app.use(hpp())

require('./routes')(app)

sequelize.sync()
  .then(() => {
    app.listen(config.port)
    console.log(`Server started on port ${config.port}`)
  })
