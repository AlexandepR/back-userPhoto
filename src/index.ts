import express from 'express'
import {runDb} from './repositories/db'
import {photosRouter} from './routes/photos-router'
import {usersRouter} from './routes/users-router'

// create express app
const app = express()
app.use(express.json());

const port = process.env.PORT || 5000

app.use('/users', usersRouter)
app.use('/photos', photosRouter)

const startApp = async () => {
    await runDb()
    app.listen(port, () => {
        console.log(`Example app listening on port: ${port}`)
    })
}

startApp()
