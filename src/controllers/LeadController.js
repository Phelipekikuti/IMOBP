const Lead = require('../models/Lead');

module.exports = {
  async store(req, res){
    const {user_id} = req.headers;
    const {spot_id} = req.params;
    const { date, name, number} = req.body;

    const lead = await Lead.create({
      user: user_id,
      spot: spot_id,
      date,
      name,
      number,
    });

    await lead.populate('spot').populate('user').execPopulate();

    return res.json(lead);
  }
};