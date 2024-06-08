import 'dotenv/config'
import express from 'express';
import path from 'path'
import morgan from 'morgan';
import cors from 'cors'
import uploadRouter from './routes/uploadRoute';
import downloadRouter from './routes/downloadPageRoute'
import sendRoute from './routes/sendEmailRoute'
import { connectDB } from './DB' // ConnectDB 

const PORT = process.env.PORT || 8080

const app = express();

app.use(morgan('tiny'))

app.use(cors())

app.use(express.static('public'))

app.use(express.static(path.resolve('../client/build')))

// Rendering EJS
app.set('views', path.join(__dirname + '/views'));
app.set('view engine', 'ejs')

// Routes
app.use('/', (_, res) => {
    res.sendFile(path?.resolve('../client/build'))
})

app.use('/api', uploadRouter)
app.use('/api/file', downloadRouter)
app.use('/api/send', sendRoute)

// Handling 404
app.use((req, res) => {
    res.status(404).send('Error No Route matches')
})

app.listen(PORT, () => {
    console.log(`server is running ${PORT}`);
})

connectDB()