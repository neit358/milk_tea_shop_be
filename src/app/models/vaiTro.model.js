import mongoose from "mongoose";

const Schema = mongoose.Schema;

const vaiTroSchema = new Schema(
  {
    tenVaiTro: { type: String },
    vaiTro: { type: String },
  },
  {
    timestamps: true,
  }
);

const VaiTro = mongoose.model("VaiTro", vaiTroSchema);

export default VaiTro;
