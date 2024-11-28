import mongoose from "mongoose";

const Schema = mongoose.Schema;

const traSchema = new Schema(
  {
    tenTra: { type: String },
  },
  {
    timestamps: true,
  }
);

const Tra = mongoose.model("Tra", traSchema);

export default Tra;
