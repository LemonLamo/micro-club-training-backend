import mongoose from "mongoose";
import "dotenv/config";

const DB_URL = process.env.DB_URL;
export const connectToDataBase = async (app) => {
  mongoose
    .connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("connected to database");
      // listin to requests
      app.listen(process.env.PORT || 5000, () => {
        console.log(
          `listining to requests on port ${process.env.PORT || 3000}`
        );
      });
    })
    .catch((error) => {
      console.log(error);
    });
};
