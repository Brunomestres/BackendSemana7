
import mongoose from 'mongoose'

const { Schema } = mongoose


const depositionsSchema = new Schema({
    name: String,
    foto: String,
    depoimento: String
})

const Depositions = mongoose.model('Depositions', depositionsSchema)


export { Depositions }