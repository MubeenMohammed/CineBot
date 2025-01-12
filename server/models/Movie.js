import mongoose, { Schema } from "mongoose";

const MovieSchema = new Schema({
  title: { type: String, required: true, trim: true },
  duration: { type: String, required: true },
  genre: { type: String, required: true },
  ratingValue: { type: Number, min: 1, max: 10, required: true },
  reviews: { type: [String] },
  lastUpdated: { type: Date, default: Date.now },
  url: { type: String, required: true },
  image: { type: String, required: true },
  ratingCount: { type: Number, required: true },
  description: { type: String, required: true },
});

export default mongoose.model("Movie", MovieSchema);
