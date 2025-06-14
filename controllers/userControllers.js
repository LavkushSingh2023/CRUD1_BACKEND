const User = require("../models/User");

// CREATEROUTES
exports.createUser =  async (req, res) => {
    try{
        const { name, email } = req.body;
        const user = new User({ name, email, file: req.file.filename });
        await user.save();
        res.json(user);
    }catch(err){
        res.status(500).send("Error in uploading data: ", err);
    }
};

// READROUTES
exports.readUsers =  async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
      res.status(500).send("Error in reading data: ", err);
    }
};

// UPDATEROUTES
exports.updateUser = async (req, res) => {
    try {
        const { name, email } = req.body;
        const update = { name, email };
        if (req.file) update.file = req.file.filename;
        const updated = await User.findByIdAndUpdate(req.params.id, update, {
          new: true,
        });
        res.json(updated);
    } catch (err) {
      res.status(500).send("Error in updating data: ", err);
    }
};

// DELETEROUTES
exports.deleteUser = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.sendStatus(204);
    } catch (err) {
      res.status(500).send("Error in deleing data: ", err);
    }
};
