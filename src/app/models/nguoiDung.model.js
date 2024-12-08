import mongoose from "mongoose";

const Schema = mongoose.Schema;

const nguoiDungSchema = new Schema(
  {
    ten: { type: String },
    sdt: { type: String, require: true, unique: true },
    matKhau: { type: String, require: true },
    chiNhanh: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ChiNhanh",
    },
    diaChi: {
      soNha: { type: String },
      tenDuong: { type: String },
      phuong: { type: String },
      quan: { type: String },
      thanhPho: { type: String },
    },
    vaiTro: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "VaiTro",
      default: "6752f4f37e28ebf6a0cce09d",
    },
  },
  {
    timestamps: true,
  }
);

const NguoiDung = mongoose.model("NguoiDung", nguoiDungSchema);

export default NguoiDung;
