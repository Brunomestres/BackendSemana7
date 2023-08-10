import { Router } from 'express'
import { DestinyController } from '../../controllers/destinyController'
const routesDestiny = Router()

const destinyController = new DestinyController()

routesDestiny.get('/', destinyController.queryDestiny)
routesDestiny.post('/', destinyController.save)
routesDestiny.get('/', destinyController.find)
routesDestiny.get('/:id', destinyController.findOne)
routesDestiny.put('/:id', destinyController.update)
routesDestiny.delete('/:id', destinyController.delete)



export { routesDestiny }
