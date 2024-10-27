import mongoose from "mongoose";

const Schema = mongoose.Schema;

const kichThuocSchema = new Schema(
  {
    tenKichThuoc: { type: String, required: true },
    giaThem: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const KichThuoc = mongoose.model("KichThuoc", kichThuocSchema);

export default KichThuoc;
