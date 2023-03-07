const { categoryService } = require('../services');

const findAll = async (_req, res) => {
    try {
        const allCategories = await categoryService.findAll();
      
        res.status(200).json(allCategories);        
    } catch (error) {
        return res.status(500).json({ message: 'Unexpected error', error: error.message }); 
    }
  };
  
const insert = async (req, res) => {
    try {
        const category = req.body;
        const result = await categoryService.insert(category);
        if (result) {
            return res.status(201).json(result);
    }
        res.status(409).json({ message: 'Category already registered' });
    } catch (error) {
        return res.status(500).json({ message: 'Unexpected error', error: error.message });
    }
};

module.exports = {
    insert,
    findAll,
};