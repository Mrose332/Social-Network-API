const { User, Thought } = require("../models");


const thoughtController = {
   
    getThoughts(req, res){
        Thought.find()
        .then((thoughts) => res.json(thoughts))
        .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
    });
},
}