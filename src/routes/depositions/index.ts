import { Router } from 'express'
import { DepositionsController } from '../../controllers/depositionsController'
const routesDepositions = Router()

const depositionsController = new DepositionsController()

routesDepositions.get('/home', depositionsController.randomDepositions)
routesDepositions.post('/', depositionsController.save)
routesDepositions.get('/', depositionsController.find)
routesDepositions.get('/:id', depositionsController.findOne)
routesDepositions.put('/:id', depositionsController.update)
routesDepositions.delete('/:id', depositionsController.delete)



export { routesDepositions }
