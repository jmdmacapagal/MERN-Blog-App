const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const connection = mongoose.connection
const app = express()
const PORT = 4000
require('dotenv').config()


// import routes
const userRoute = require('./routes/user.route')
const blogRoute = require('./routes/blogs.route')

// middlewares 
app.use(cors())
app.use(bodyParser.json())
app.use('/blogs', blogRoute)
app.use('/user', userRoute)


//db connection
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true })
connection.once('open', () => console.log('mongodb connection established'))



app.listen(PORT, () => console.log('Server Running.'))