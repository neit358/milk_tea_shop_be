import mongoose from "mongoose";

const Schema = mongoose.Schema;

const loaiSanPham = new Schema(
  {
    tenSanPham: { type: String },
  },
  {
    timestamps: true,
  }
);

const LoaiSanPham = mongoose.model("LoaiSanPham", loaiSanPham);

export default LoaiSanPham;
