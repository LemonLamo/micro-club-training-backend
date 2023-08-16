import { Pokemon } from "../models/pokemonModel.js";
import mongoose from "mongoose";
const getAllPokemons = async (req, res) => {
  try {
    const pokemons = await Pokemon.find();
    if (!pokemons) {
      return res
        .status(404)
        .json({ message: "Error when fetching pokemons", data: {} });
    }
    return res
      .status(200)
      .json({ message: "Fetched succesfully", data: pokemons });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", data: {} });
  }
};

const getOnePokemon = async (req, res) => {
  try {
    const id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ message: "No such a pokemon", data: {} });
    }
    const pokemon = await Pokemon.findOne({ _id: id });
    if (!pokemon) {
      return res
        .status(404)
        .json({ message: "Error when fetching pokemon", data: {} });
    }
    return res
      .status(200)
      .json({ message: "Fetched succesfully", data: pokemon });
  } catch (error) {
    console.log("error", error.message);
    return res.status(500).json({ message: "Internal server error", data: {} });
  }
};

const addNewPokemon = async (req, res) => {
  try {
    const pokemon = req.body;
    const newPokemon = await Pokemon.create(pokemon);
    if (!newPokemon) {
      return res
        .status(404)
        .json({ message: "Error when creating pokemon", data: {} });
    }
    return res.status(200).json({ message: "Createdd succesfully", data: {} });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", data: {} });
  }
};

const deletePokemon = async (req, res) => {};

const updatePokemon = async (req, res) => {};

export default {
  getAllPokemons,
  getOnePokemon,
  deletePokemon,
  updatePokemon,
  addNewPokemon,
};
