
import {Request, Response } from 'express'
import { Depositions } from '../models/depositions'
import { IDepositions } from '../interfaces/depositions'


class DepositionsController {

  async save(req:Request, res:Response) {
    try {
      const {depoimentos, foto, name } = req.body as IDepositions
      const depositions = new Depositions( {
        depoimento: depoimentos,
        foto,
        name
      })

      await depositions.save()

      return res.status(201).json({ message: 'Depoimento criado com sucesso!'})

    } catch (error) {
      console.log(error)
      return res.status(500).json({ message: 'Aconteceu um erro, tente novamente!'})

    }
  }

  async find(req:Request, res:Response) {
    try {

      const depositions = await Depositions.find()
      console.log(depositions)
      return res.status(200).json(depositions)
    } catch (error) {
      console.log(error)
      return res.status(500).json({ message: 'Aconteceu um erro, tente novamente!'})
    }
  }
}



export { DepositionsController }
