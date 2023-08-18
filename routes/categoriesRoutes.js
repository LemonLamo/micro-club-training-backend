import express from "express";
import categoriesControllers from "../controllers/categoriesControllers";
const router = express.Router();

router.get("/", categoriesControllers.getAllCategories);
router.get("/:name", categoriesControllers.getOneCategory);
router.post("/", categoriesControllers.addNewCategory);
router.delete("/:name", categoriesControllers.deleteCategory);
router.put("/:name", categoriesControllers.updateCategory);

export default router;
