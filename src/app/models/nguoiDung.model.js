import mongoose from "mongoose";

const Schema = mongoose.Schema;

const nguoiDung = new Schema(
  {
    ten: { type: String },
    sdt: { type: String, require: true, unique: true },
    matKhau: { type: String, require: true },
  },
  {
    timestamps: true,
  }
);

const NguoiDung = mongoose.model("NguoiDung", nguoiDung);

export default NguoiDung;
