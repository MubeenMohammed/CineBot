import mongoose, { Schema } from "mongoose";

const MovieSchema = new Schema({
  title: { type: String, required: true, trim: true },
  duration: { type: Number, required: true },
  genre: { type: String, required: true },
  rating: { type: Number, min: 1, max: 10, required: true },
  reviews: { type: [String] },
  lastUpdated: { type: Date, default: Date.now },
  releasedDate: { type: Date, required: true },
});

export default mongoose.model < IMovie > ("Movie", MovieSchema);
