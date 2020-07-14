const Spot = require('../models/Spot');
const User = require('../models/User');



module.exports = {
  async index(req, res){
     const { type } = req.query;

     const spots = await Spot.find({ types: type })
     
     return res.json(spots);
  },

  async store(req, res){
   
    const { filename } = req.file;
    const { city, price, name, types, differentials } = req.body; 
    const { user_id } = req.headers;

    const user = await User.findById(user_id);

    if(!user){
      return res.status(400).json({ error: 'User does not exist' })
    }

    const spot = await Spot.create({
      user: user_id,
      thumbnail: filename,
      city,
      price,
      name,
      types: types.split(',').map(type => type.trim()),
      differentials: differentials.split(',').map(differential => differential.trim()),
    });

    return res.json(spot);
  }
}