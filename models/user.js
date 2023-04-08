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

//  Virtual called `friendCount` that retrieves the length of the user's `friends` array field on query. 
userSchema.virtual("friendsList").get(function(){
  return this.friends.length;
});


const User = model('user', userSchema);

module.exports = User;