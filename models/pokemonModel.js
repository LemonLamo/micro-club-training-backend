import mongoose from "mongoose";

const pokemonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    required: true,
  },
  speed: {
    type: Number,
    required: true,
  },
  defence: {
    type: Number,
    required: true,
  },
  attack: {
    type: Number,
    required: true,
  },
  categories: [{ type: mongoose.Schema.Types.ObjectId, ref: "Category" }],
});

export const Pokemon = mongoose.model("Pokemon", pokemonSchema);
