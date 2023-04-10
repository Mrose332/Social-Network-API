const { Schema, model } = require("mongoose");


const thoughtSchema = new Schema(
    {
        thoughtPost: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 255,
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            
            type: Date,
            default: Date.now,
        },
       
    },
    {
        toJSON: {
            getters: true
        },
        id: false
    }
)



const Thought = model('thought', thoughtSchema);

module.exports = Thought;