import mongoose from "mongoose";

const Schema = mongoose.Schema;

const kichThuoc = new Schema(
  {
    tenKichThuoc: { type: String, required: true },
    giaThem: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const KichThuoc = mongoose.model("KichThuoc", kichThuoc);

export default KichThuoc;
