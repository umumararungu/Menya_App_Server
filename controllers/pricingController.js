import Price from '../models/pricing.js';

export const createPrice = async (req, res) => {
    try {
        const { name, price, desc } = req.body;
        const newPrice = new Price({ name, price, desc });
        await newPrice.save();
        res.status(201).json({data: newPrice, message: 'Price saved successfully created', status:true});
    } catch (error) {
        res.status(400).json({ error: error.message, status:false });
    }
};

export const getAllPrice = async (req, res) => {
    try {
        const prices = await Price.find(); // Use Price model, not price
        res.status(200).json({data:prices, message:'data successfully retrieved', status: true});
    } catch (error) {
        res.status(500).json({ error: error.message, status:false });
    }
};

export const getPriceById = async (req, res) => {
    try {
        const price = await Price.findById(req.params.id); // Use Price model
        if (!price) return res.status(404).json({ error: 'Price not found' });
        res.status(200).json({data:price, message:'message successfully retrieved', status:false}); // Return the price
    } catch (error) {
        res.status(500).json({ error: error.message, status:false });
    }
};

export const updatePrice = async (req, res) => {
    const {id} = req.params
    try {
        const updatedPrice = await Price.findByIdAndUpdate(id,req.body,{ new: true });
        if (!updatedPrice) return res.status(404).json({ error: 'Price not found' });
        res.status(200).json({data: updatedPrice, message:"Price updated successfully", status: true});
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const deletePrice = async (req, res) => {
    try {
        const deletedPrice = await Price.findByIdAndDelete(req.params.id);
        if (!deletedPrice) return res.status(404).json({ error: 'Price not found', status:false });
        res.status(200).json({ message: 'Price deleted successfully', status:true });
    } catch (error) {
        res.status(500).json({ error: error.message, status:false });
    }
};
