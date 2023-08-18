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

const deletePokemon = async (req, res) => {
  try{
    const id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ message: "This Pokemon does not exist", data: {} });
    }
    const pokemon = await Pokemon.deleteOne({_id : id});
    if (!pokemon) {
      return res
        .status(404)
        .json({ message: "No such pokemon", data: {} });
    }
    return res
      .status(200)
      .json({ message: "Data deleted succesfully" });
  } catch (error) {
    console.log("error", error.message);
    return res.status(500).json({ message: "Internal server error", data: {} });
  }
};

const updatePokemon = async (req, res) => {
  try{
    const id = req.params.id;
    const update = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ message: "No such a pokemon", data: {} });
    }
    
    const pokemon = await Pokemon.findByIdAndUpdate({_id : id}, update);
    // we have to check again if the pokemon did not get deleted while awaiting for a db response
    if (!pokemon) {
      return res
        .status(404)
        .json({ message: "No such pokemon", data: {} });
    }
    return res
      .status(200)
      .json({ message: "Data updated succesfully", data: pokemon });
    
  }catch(error){
    console.log("error", error.message);
    return res.status(500).json({ message: "Internal server error", data: {} });
  }
};

export default {
  getAllPokemons,
  getOnePokemon,
  deletePokemon,
  updatePokemon,
  addNewPokemon,
};
