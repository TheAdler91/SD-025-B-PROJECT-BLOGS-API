const { postService } = require('../services');

const findAll = async (_req, res) => {
    try {
        const result = await postService.findAll();
      
        res.status(200).json(result);        
    } catch (error) {
        return res.status(500).json({ message: 'Unexpected error', error: error.message }); 
    }
  };

module.exports = {
    findAll,
};