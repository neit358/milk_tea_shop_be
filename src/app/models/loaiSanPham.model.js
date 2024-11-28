import mongoose from "mongoose";

const Schema = mongoose.Schema;

const loaiSanPhamSchema = new Schema(
  {
    tenLoaiSanPham: { type: String },
    isDel: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

const LoaiSanPham = mongoose.model("LoaiSanPham", loaiSanPhamSchema);

export default LoaiSanPham;
