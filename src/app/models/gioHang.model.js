import mongoose from "mongoose";

const gioHangSchema = new mongoose.Schema(
  {
    nguoiDung: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    items: [
      {
        sanPham: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "SanPham",
          required: true,
        },
        soLuong: { type: Number, default: 1 },
        thongTinKichThuoc: {
          kichThuoc: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "KichThuoc",
          },
          giaThem: { type: Number, default: 0 },
        },
        da: { type: String, required: true },
        ngot: { type: String, required: true },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const GioHang = mongoose.model("GioHang", gioHangSchema);

export default GioHang;
