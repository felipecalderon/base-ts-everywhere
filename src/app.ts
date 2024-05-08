import express from 'express'
import route from './routes.ts'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(
    cors({
        origin: '*',
    })
)
app.use(route)

app.listen(3001, () => {
    console.log('Conectado en express')
})
