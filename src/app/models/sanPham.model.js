import mongoose from "mongoose";

const Schema = mongoose.Schema;

const sanPham = new Schema(
  {
    tenSanPham: { type: String },
    gia: { type: Number, required: true },
    moTa: { type: String },
    chiNhanhApDung: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ChiNhanh",
      },
    ],
    trangThai: { type: Boolean, default: true },
    isDel: { type: Boolean, default: false },
    loaiSanPham: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "LoaiSanPham",
      required: true,
    },
    kichThuoc: [
      {
        tenKichThuoc: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "KichThuoc",
        },
        giaThem: { type: Number, default: 0 },
      },
    ],
    hinhAnh: { type: String },
    ngot: [
      {
        type: string,
      },
    ],
    da: [
      {
        type: string,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const SanPham = mongoose.model("SanPham", sanPham);

export default SanPham;
