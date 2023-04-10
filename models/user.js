const { Schema, model } = require('mongoose');

// Schema to create user model
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
      default: "Thought",
    },
    friends: [
        {
            type: Schema.Types.ObjectId,
            default: "User",
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