import mongoose from "mongoose";

const Schema = mongoose.Schema;

const sanPhamSchema = new Schema(
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
    deXuat: { type: Boolean, default: false },
    isDel: { type: Boolean, default: false },
    loaiSanPham: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "LoaiSanPham",
      required: true,
    },
    thongTinKichThuoc: [
      {
        kichThuoc: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "KichThuoc",
        },
        giaThem: { type: Number, default: 0 },
      },
    ],
    thongTinTopping: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Topping",
      },
    ],
    hinhAnh: { type: String },
    ngot: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Ngot",
      },
    ],
    da: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Da",
      },
    ],
    tra: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tra",
      },
    ],
    khuyenMai: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "KhuyenMai",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const SanPham = mongoose.model("SanPham", sanPhamSchema);

export default SanPham;
