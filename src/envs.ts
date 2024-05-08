import { config } from 'dotenv'
config()

export const env = {
    openaiKEY: process.env.OPENAI_KEY,
    cloudinary: process.env.CDN,
}
