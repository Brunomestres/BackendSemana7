
import {Request, Response } from 'express'
import { Destiny } from '../models/destiny'
import { IDestiny } from '../interfaces/destiny'


class DestinyController {

  async save(req:Request, res:Response) {
    try {
      const {preco, foto, name } = req.body as IDestiny
      const destiny = new Destiny( {
        preco,
        foto,
        name
      })

      await destiny.save()

      return res.status(201).json({ message: 'Destino criado com sucesso!'})

    } catch (error) {
      console.log(error)
      return res.status(500).json({ message: 'Aconteceu um erro, tente novamente!'})

    }
  }

  async find(req:Request, res:Response) {
    try {
      const destinies = await Destiny.find()
      return res.status(200).json(destinies)
    } catch (error) {
      console.log(error)
      return res.status(500).json({ message: 'Aconteceu um erro, tente novamente!'})
    }
  }
  async findOne(req:Request, res:Response) {
    try {
      const id = req.params.id
      const depositions = await Destiny.findById(id)
      if(!depositions) {
        return res.status(404).json({ message: "Destino não encontrado!"})
      }

      return res.status(200).json(depositions)
    } catch (error) {
      console.log(error)
      return res.status(500).json({ message: 'Aconteceu um erro, tente novamente!'})
    }
  }

  async update(req:Request, res:Response) {
    try {
      const id = req.params.id
      const depositions = await Destiny.findById(id)
      const {preco, foto, name } = req.body as IDestiny
      if(!depositions) {
        return res.status(404).json({ message: "Destino não encontrado!"})
      }

      await depositions.updateOne({preco, foto, name } )
      return res.status(200).json({ message: "Destino alterado com sucesso!"})
    } catch (error) {
      console.log(error)
      return res.status(500).json({ message: 'Aconteceu um erro, tente novamente!'})
    }
  }

  async delete(req:Request, res:Response) {
    try {
      const id = req.params.id
      const depositions = await Destiny.findById(id)
      if(!depositions) {
        return res.status(404).json({ message: "Destino não encontrado!"})
      }
      await depositions.deleteOne()
      return res.status(200).json({ message: "Destino excluido com sucesso!"})
    } catch (error) {
      console.log(error)
      return res.status(500).json({ message: 'Aconteceu um erro, tente novamente!'})
    }
  }


  async queryDestiny(req:Request, res:Response) {
    try {
      const destinies = await Destiny.find({ name: req.query.name })

      if(destinies.length === 0) {
        return res.status(404).json({ message: "Destino não encontrado!"})
      }

      return res.status(200).json(destinies)
    } catch (error) {
      console.log(error)
      return res.status(500).json({ message: 'Aconteceu um erro, tente novamente!'})
    }
  }
}

export { DestinyController }
