import mongoose from 'mongoose';

const priceModel = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    price:{
        type: String,
        required: true
    },
    desc:{
        type: String,
        required: true
    }
});

const Price = mongoose.model('Price', priceModel);

export default Price;