import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ngotSchema = new Schema(
  {
    tenNgot: { type: String },
  },
  {
    timestamps: true,
  }
);

const Ngot = mongoose.model("Ngot", ngotSchema);

export default Ngot;
