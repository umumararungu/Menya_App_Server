import {getPriceById,getAllPrice, createPrice,deletePrice,updatePrice} from '../controllers/pricingController.js';

import express from 'express';
const pricingController = express.Router();

pricingController.post('/createPrice', createPrice);
pricingController.get('/listPrice', getAllPrice);
pricingController.get('/listPriceById/:id', getPriceById);
pricingController.put('/updatePrice/:id', updatePrice);
pricingController.delete('/deletePrice/:id', deletePrice);


export default pricingController
