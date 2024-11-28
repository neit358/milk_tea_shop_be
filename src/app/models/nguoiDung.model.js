import mongoose from "mongoose";

const Schema = mongoose.Schema;

const nguoiDungSchema = new Schema(
  {
    ten: { type: String },
    sdt: { type: String, require: true, unique: true },
    matKhau: { type: String, require: true },
    diaChi: {
      soNha: { type: String },
      tenDuong: { type: String },
      phuong: { type: String },
      quan: { type: String },
      thanhPho: { type: String },
    },
  },
  {
    timestamps: true,
  }
);

const NguoiDung = mongoose.model("NguoiDung", nguoiDungSchema);

export default NguoiDung;
