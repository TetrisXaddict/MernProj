import mongoose from "mongoose";

const profileSchema = mongoose.Schema({
  name: String,
  description: String,
  //picture: Image,
  section: {
    type: String,
    default: "no input recieved",
  },
});

const profile = mongoose.model("profile", profileSchema);

export default profile;
