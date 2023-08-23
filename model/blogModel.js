import { Schema, model } from "mongoose";

const blogSchema = new Schema(
  {
    author: {
      type: String,
      require: true,
    },
    title: {
      type: String,
      require: true,
    },
    content: {
      type: String,
      require: true,
    },
    publication_date: {
      type: Date,
      default: Date.now,
    },
  },

  { timestamps: true }
);

export default model("Blog", blogSchema);
