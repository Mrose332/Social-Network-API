const { Schema, model } = require('mongoose');

// Schema to create Student model
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      maxlength: 50,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    thoughts: {
      type: Schema.Types.ObjectId,
      ref: "Thought",
    },
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: "User",
        }
    ]
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);



const User = model('user', userSchema);

module.exports = User;