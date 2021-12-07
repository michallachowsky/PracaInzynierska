const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(cors()) // clearing ip to avoid error with frontend

const db = require('./models')

//Routes
const homeRoute = require('./routes/Home')
app.use('/',homeRoute)
const authRoute = require('./routes/Users')
app.use('/auth',authRoute)
const scoreRoute = require('./routes/Points')
app.use('/score',scoreRoute)
const movesRoute = require('./routes/MovesPoints')
app.use('/moves',movesRoute)

db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log("Server running on port 3001")
    })
})
