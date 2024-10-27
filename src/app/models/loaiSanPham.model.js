import mongoose from "mongoose";

const Schema = mongoose.Schema;

const loaiSanPhamSchema = new Schema(
  {
    tenSanPham: { type: String },
  },
  {
    timestamps: true,
  }
);

const LoaiSanPham = mongoose.model("LoaiSanPham", loaiSanPhamSchema);

export default LoaiSanPham;
