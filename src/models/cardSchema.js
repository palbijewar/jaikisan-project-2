const mongoose = require('mongoose');


const {
    Schema,
    model
} = mongoose


const cardSchema = new Schema({
    cardNumber: {
        type: String,
        unique: true,
        required: true,
    },
    cardType: {
        type: String,
        enum: ['REGULAR', 'SPECIAL'],
        required: true,
    },
    customerName: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ['ACTIVE', 'INACTIVE'],
        default: 'ACTIVE',
    },
    vision: {
        type: String,
    },
    customerID: {
        type: Schema.Types.ObjectId,
        ref: 'Customer',
        required: true,
    },
},{timestamps : true})



module.exports = mongoose.model('Card', cardSchema)

