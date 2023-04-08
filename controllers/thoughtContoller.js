const { User, Thought } = require("../models");


const thoughtController = {
   //get all thoughts
    getThoughts(req, res){
        Thought.find()
        .then((thoughts) => res.json(thoughts))
        .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
    });
},
}

//get single thought
getSingleThought(req, res)
    Thought.find({_id: req.params.thoughtId})
    .select("-__v")
    .then(async (thought) =>
    !thought
      ? res.status(404).json({ message: 'No thought with that ID' })
      : res.json(thought)
  )
  .catch((err) => {
    console.log(err);
    return res.status(500).json(err);
  });


createThought(req, res)
    Thought.create(req.body)
    .then((thought) => res.json(thought))
    .catch((err) => res.status(500).json(err));
