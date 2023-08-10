import {  Router } from 'express'

const routes = Router()
import {routesDepositions } from './depositions'
import { routesDestiny } from './destiny'

routes.use('/depoimentos', routesDepositions)
routes.use('/destinos', routesDestiny)


export { routes }
