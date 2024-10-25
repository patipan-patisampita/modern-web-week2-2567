import express from 'express'
import connectMongoDB from './config/db.js'
import authRoute from './routes/authRoute.js'
const app = express()

const port = process.env.PORT || 8080

//Connect to MongoDB Database
connectMongoDB()

//Set view engin & Embedded JavaScript templates
app.set('view engine', 'ejs')

//Route for the Home page: http://localhost/3000
app.get('/', (req, res) => {
    res.render('index', { title: 'Home Page' })
})

app.use('/', authRoute)

app.listen(port, () => {
    console.log(`SERVER is running on http://localhost:${port}`)
})