const User = require('../models/User');

module.exports = {
  async store(req, res){
    const { email } = req.body;
    const { password } = req.body;

    let user = await User.findOne({ email });

    if(!user){
      user = user = await User.create({ email, password });
    }

    return res.json(user);
  }
};