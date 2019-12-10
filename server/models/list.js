import mongoose from "mongoose";

const Schema = mongoose.Schema;

const listSchema = new Schema(
  {
    name: String,
    description: String,
    create_time: {
      type: String,
      default: Date.now()
    },
    update_time: {
      type: String,
      default: ""
    },
    link: String,
    category: {
      type: String,
      default: ""
    },
    tag: {
      type: String,
      default: ""
    }
  },
  { versionKey: false }
);

export default mongoose.model("lists", listSchema);
