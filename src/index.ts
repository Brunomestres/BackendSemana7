import express from 'express'
import { routes } from './routes'
import cors from 'cors'
import './config/db'
const PORT = 3333
const app = express()

app.use(cors())
app.use(express.json())
app.use('/v1', routes)

app.listen(PORT, () => {
    console.log('Listening on port: ', PORT)
})
