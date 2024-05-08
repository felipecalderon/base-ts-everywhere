import { instructions } from './instructions'
import OpenAI from 'openai'
import express, { Response, Request } from 'express'

const app = express()
const openai = new OpenAI({
    apiKey: process.env.OPENAI_KEY,
})

app.use(express.json())
app.post('/', async (req: Request, res: Response) => {
    try {
        // const { role, content } = req.body
        const fechData = await openai.chat.completions.create({
            messages: [...instructions],
            model: 'gpt-4-1106-preview',
        })
        const respIA = fechData.choices[0].message
        return res.json({ respuestaGPT: respIA })
    } catch (error) {
        console.log(error)
        res.json(error)
    }
})

app.listen(3001, () => {
    console.log('Conectado en express')
})
