import { Router } from 'express'
import {
  createCard,
  deleteCard,
  getAllCards,
  updateCard,
} from '../controllers/card/card-controllers'
import {
  parseCardSchema,
  validateCard,
} from '../controllers/card/utils/card-utils'

const cardRouter = Router()

// Define routes

cardRouter.get('/', getAllCards)
cardRouter.post('/new', parseCardSchema, validateCard, createCard)
cardRouter.delete('/:id', deleteCard)
cardRouter.put('/:id', parseCardSchema, validateCard, updateCard)

export { cardRouter }
