import express from "express";
import { connectToDataBase } from "./utils/db.js";
import pokemonsRoutes from "./routes/pokemonsRoutes.js";

const app = express();
app.use(express.json());

app.use("/api/pokemons", pokemonsRoutes);

await connectToDataBase(app);
