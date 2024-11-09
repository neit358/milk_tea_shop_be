import mongoose from "mongoose";

const Schema = mongoose.Schema;

const toppingSchema = new Schema(
  {
    tenTopping: { type: String },
  },
  {
    timestamps: true,
  }
);

const Topping = mongoose.model("Topping", toppingSchema);

export default Topping;
