import { Router } from 'express'
import { DepositionsController } from '../../controllers/depositionsController'
const routesDepositions = Router()

const depositionsController = new DepositionsController()

routesDepositions.post('/', depositionsController.save)
routesDepositions.get('/', depositionsController.find)



export { routesDepositions }
