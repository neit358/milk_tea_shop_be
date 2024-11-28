import mongoose from "mongoose";

const Schema = mongoose.Schema;

const toppingSchema = new Schema(
  {
    tenTopping: { type: String },
    gia: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  }
);

const Topping = mongoose.model("Topping", toppingSchema);

export default Topping;
