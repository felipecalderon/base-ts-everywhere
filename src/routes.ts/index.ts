import { Router } from 'express'
import { chatController } from '../controllers/openai.controller'

const route = Router()

route.post('/', chatController)

export default route
