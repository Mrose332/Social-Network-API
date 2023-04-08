const { Schema, model } = require("mongoose");
const reactionSchema = require("./Reaction");

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
            // get: timestamp => dateFormat(timestamp)
            type: Date,
            default: Date.now,
        },
        reactions: [reactionSchema],
    },
    {
        toJSON: {
            getters: true
        },
        id: false
    }
)

thoughtSchema.virtual("reactionCount").get(function(){
    return this.reactions.length;
  });

const Thought = model('thought', thoughtSchema);

module.exports = Thought;