const { User, Thought } = require("../models");


const userTotal = async () =>
    User.aggregate()
    .count("userCount")
    .then((totalUsers) => totalUsers)

    const userController = {
            // Get all users and total
    getUsers(req, res){
        User.find()
        .then(async (users) => {
            const userObj = {
                users,
                userTotal: await userTotal(),
            };
            return res.json(userObj);
        })
        .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
        });
    },
// get one user
    getSingleUser(req, res){
        User.find({_id: req.params.userId})
        .select("-__v")
        .then(async (user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json(user)
      )
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
    },
//create user
    createUser(req, res){
        User.create(req.body)
        .then((user) => res.json(user))
        .catch((err) => res.status(500).json(err));
    },
//update user
    updateUser(req, res){
        User.findOneAndUpdate({ _id: req.params.userId},
          { $set: req.body })
        .then((user) => 
        !user
          ? res.status(404).json({ message: 'No user with that Id' })
          : res.status(200).json('User has been updated')
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
    },
//delete user
    deleteUser(req, res){
        User.findOneAndDelete({ _id: req.params.userId})
        .then((user) => 
        !user
          ? res.status(404).json({ message: 'No user with that Id' })
          : res.status(200).json('User has been deleted')
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
    },

    //add friend
    addFriend(req, res){
        User.findOneAndUpdate(
        { _id: req.params.userId },
        { $addToSet: { friends: req.params.friendId } },
        { runValidators: true, new: true }
        )
        .then((user) =>
            !user
            ? res
                .status(404)
                .json({ message: 'No user found with that ID' })
            : res.json(user)
        )
        .catch((err) => res.status(500).json(err));
      },
  //remove friend
      removeFriend(req, res){
        User.findOneAndUpdate(
          { _id: req.params.userId },
          { $addToSet: { friends: req.params.friendId } },
          { runValidators: true, new: true }
          )
          .then((user) =>
              !user
              ? res
                  .status(404)
                  .json({ message: 'No user found with that ID' })
              : res.json(user)
          )
          .catch((err) => res.status(500).json(err));
      },
  }
  
  
 
  module.exports = userController;