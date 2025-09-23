const { default: mongoose, Schema } = require('mongoose');

const userSchema = new Schema(
  {
    username: {
      type: String,
      trim: true,
      required: true,
      unique: true
    },
    profilePic: {
      type: String,
      default: null
    },
    displayName: {
      type: String,
      default: function () {
        return this.username;
      }
    },
    email: {
      type: String,
      trim: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    followers: [{ type: mongoose.Types.ObjectId, required: true, ref: 'User' }],
    following: [{ type: mongoose.Types.ObjectId, required: true, ref: 'User' }],
    tweets: [{ type: mongoose.Types.ObjectId, required: true, ref: 'Tweet' }],
    // **Only define the index here**
    githubID: {
      type: Number,
      unique: true,
      sparse: true,
      default: '',
      partialFilterExpression: {
        githubID: { $exists: true, $gt: '' }
      }
    }
  },
  { timestamps: true }
);

// **Remove this separate index call**
// userSchema.index(
//   { githubID: 1 },
//   {
//     unique: true,
//     partialFilterExpression: {
//       githubID: { $exists: true, $gt: '' }
//     }
//   }
// );

module.exports = mongoose.model('User', userSchema);
