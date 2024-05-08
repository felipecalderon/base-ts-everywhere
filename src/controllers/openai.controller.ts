import { instructions } from '../instructions'
import { Response, Request } from 'express'
import { openai } from '../openaiconfig'

export const chatController = async (req: Request, res: Response) => {
    try {
        const { role, content } = req.body
        // { role: 'user', content: 'doc me duele la rodilla que hago?' }

        const fechData = await openai.chat.completions.create({
            messages: [...instructions, { role, content }],
            model: 'gpt-4-1106-preview',
        })

        const respIA = fechData.choices[0].message
        return res.json(respIA)
    } catch (error) {
        console.log(error)
        res.json(error)
    }
}
