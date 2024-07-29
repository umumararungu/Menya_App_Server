import express from 'express';
import {createContact, getContacts, deleteContact} from '../controllers/contactController.js';
const contactRouter = express.Router();

contactRouter.post('/createContact', createContact);
contactRouter.get('/getContact', getContacts);
contactRouter.delete('/removeContact/:id', deleteContact);

export default contactRouter;
