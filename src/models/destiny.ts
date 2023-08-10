
import mongoose from 'mongoose'

const { Schema } = mongoose


const destinySchema = new Schema({
    name: String,
    foto: String,
    preco: Number
})

const Destiny = mongoose.model('Destiny', destinySchema)


export { Destiny }
