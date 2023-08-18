import { Category } from "../models/categoryModel";
import mongoose from "mongoose";

const getAllCategories = async (req, res) => {
    try {
      const categories = await Category.find();
      if (!categories) {
        return res
          .status(404)
          .json({ message: "Error when fetching categories", data: {} });
      }
      return res
        .status(200)
        .json({ message: "Fetched succesfully", data: categories });
    } catch (error) {
      return res.status(500).json({ message: "Internal server error", data: {} });
    }
  };
  
  const getOneCategory = async (req, res) => {
    try {
      const name = req.params.name;
      if (!mongoose.Types.ObjectId.isValid(name)) {
        return res.status(404).json({ message: "No such a category", data: {} });
      }
      const category = await Category.findOne({ _name: name });
      if (!category) {
        return res
          .status(404)
          .json({ message: "Error when fetching this category", data: {} });
      }
      return res
        .status(200)
        .json({ message: "Fetched succesfully", data: category });
    } catch (error) {
      console.log("error", error.message);
      return res.status(500).json({ message: "Internal server error", data: {} });
    }
  };
  
  const addNewCategory = async (req, res) => {
    try {
      const category = req.body;
      const newCategory = await Category.create(category);
      if (!newCategory) {
        return res
          .status(404)
          .json({ message: "Error when creating Category", data: {} });
      }
      return res.status(200).json({ message: "Createdd succesfully", data: {} });
    } catch (error) {
      return res.status(500).json({ message: "Internal server error", data: {} });
    }
  };
  
  const deleteCategory = async (req, res) => {
    try{
      const name = req.params.name;
      if (!mongoose.Types.ObjectId.isValid(name)) {
        return res.status(404).json({ message: "This Category does not exist", data: {} });
      }
      const category = await Category.deleteOne({_name : name});
      if (!category) {
        return res
          .status(404)
          .json({ message: "No such category", data: {} });
      }
      return res
        .status(200)
        .json({ message: "Data deleted succesfully" });
    } catch (error) {
      console.log("error", error.message);
      return res.status(500).json({ message: "Internal server error", data: {} });
    }
  };
  
  const updateCategory = async (req, res) => {
    try{
      const id = req.params.name;
      const update = req.body;
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ message: "No such category", data: {} });
      }
      
      const category = await Category.findByIdAndUpdate({_id : id}, update);
      
      if (!category) {
        return res
          .status(404)
          .json({ message: "No such category", data: {} });
      }
      return res
        .status(200)
        .json({ message: "Data updated succesfully", data: category });
      
    }catch(error){
      console.log("error", error.message);
      return res.status(500).json({ message: "Internal server error", data: {} });
    }
  };
  
  export default {
    getAllCategories,
    getOneCategory,
    deleteCategory,
    updateCategory,
    addNewCategory,
  };
  