import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    login: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    timer: {
      type: Number,
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
