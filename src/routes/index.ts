import {  Router } from 'express'

const routes = Router()
import {routesDepositions } from './depositions'

routes.use('/depoimentos', routesDepositions)


export { routes }
