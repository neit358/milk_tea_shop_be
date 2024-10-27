import mongoose from "mongoose";

const Schema = mongoose.Schema;

const chiNhanhSchema = new Schema(
  {
    tenChiNhanh: { type: String },
    diaChi: {
      soNha: { type: String },
      tenDuong: { type: String },
      phuong: { type: String },
      quan: { type: String },
      thanhPho: { type: String },
    },
    sdt: { type: String },
    email: { type: String },
    trangThai: { type: Boolean, default: true },
    isDel: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

const ChiNhanh = mongoose.model("ChiNhanh", chiNhanhSchema);

export default ChiNhanh;
