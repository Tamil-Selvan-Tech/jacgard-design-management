import mongoose from "mongoose";

const designSchema = new mongoose.Schema({
  designNumber: {
    type: String,
    required: true,
  },

  image: {
    type: String,
  },

  stock: {
    type: Number,
    default: 0,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Design = mongoose.model("Design", designSchema);

export default Design;