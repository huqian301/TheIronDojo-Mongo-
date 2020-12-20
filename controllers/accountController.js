const db = require('../model');

module.exports = {
  getUserData: async (req, res) => {
    const id = req.user._id;
    try {
      res.json(await db.User.findOne({ _id: id }));
    } catch (e) {
      console.log('accountController getUserData', e);
      res.status(500).json(e);
    }
  },
};
