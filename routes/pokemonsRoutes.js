import express from "express";
import pokemonsControllers from "../controllers/pokemonsControllers.js";
const router = express.Router();

router.get("/", pokemonsControllers.getAllPokemons);
router.get("/:id", pokemonsControllers.getOnePokemon);
router.post("/", pokemonsControllers.addNewPokemon);
router.delete("/:id", pokemonsControllers.deletePokemon);
router.put("/:id", pokemonsControllers.updatePokemon);

export default router;
