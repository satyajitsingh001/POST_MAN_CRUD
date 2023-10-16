const User = require('../models/userSchema');

exports.getPosts = (req, res, next) => {
  res.status(200).json({
    posts: [{ title: 'First Post', content: 'This is the first post!' }]
  });
};

exports.createPost = async(req, res, next) => {
  try {
    const user = new User(req.body)
    const data =await user.save();
    console.log("data submited")
    res.status(201).send(data);
  } catch (error) {
    console.log(error)
    res.status(400).json("error");
  }
};

exports.getsData =  async (req, res,next) => {
  try {
      const getdata = await User.find();
      res.send(getdata)
  } catch (error) {
      return res.status(400).send(error)
  }
}

//For Perticular Data
exports.getData =  async (req, res,next) => {
  try {
      const id = req.params.id
      const getdata = await User.findById(id);
      res.send(getdata)
  } catch (error) {
      return res.status(400).send(error)
  }
}


//For Update
exports.updateData =  async (req, res,next) => {
  try {
    const _id = req.params.id
      const newData = await User.findByIdAndUpdate(_id ,req.body,{
        new: true,
      });
      res.send(newData)
  } catch (error) {
      return res.status(400).send(error)
  }
}

//For Delete
exports.deleteData =  async (req, res,next) => {
  try {
    const _id = req.params.id
      const deleteData = await User.findByIdAndDelete(_id);
      res.send(deleteData)
  } catch (error) {
      return res.status(400).send(error)
  }
}



