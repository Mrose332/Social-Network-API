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