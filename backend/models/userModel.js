const { default: mongoose, Schema } = require('mongoose');

const userSchema = new Schema(
  {
    username: { type: String, trim: true, required: true, unique: true },
    profilePic: { type: String, default: null },
    displayName: {
      type: String,
      default: function () {
        return this.username;
      }
    },
    email: { type: String, trim: true, lowercase: true, required: true, unique: true },
    password: { type: String, required: true },
    followers: [{ type: mongoose.Types.ObjectId, ref: 'User', default: undefined }],
    following: [{ type: mongoose.Types.ObjectId, ref: 'User', default: undefined }],
    tweets: [{ type: mongoose.Types.ObjectId, ref: 'Tweet', default: undefined }],
    githubID: { type: Number, unique: true, sparse: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);
