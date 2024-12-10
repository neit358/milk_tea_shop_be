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
        thongTinTopping: [
          {
            topping: {
              type: mongoose.Schema.Types.ObjectId,
              ref: "Topping",
            },
            soLuong: { type: Number, default: 1 },
          },
        ],
        da: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Da",
        },
        ngot: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Ngot",
        },
        tra: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Tra",
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const GioHang = mongoose.model("GioHang", gioHangSchema);

export default GioHang;
