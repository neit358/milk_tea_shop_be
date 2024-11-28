import mongoose from "mongoose";

const Schema = mongoose.Schema;

const trangThaiSchema = new Schema(
  {
    tenTrangThai: { type: String },
    moTa: { type: String },
    trangThai: { type: Number, default: 1 },
    thaoTac: { type: String },
    tienTrinh: { type: Number },
    mauSac: { type: String },
  },
  {
    timestamps: true,
  }
);

const TrangThai = mongoose.model("TrangThai", trangThaiSchema);

export default TrangThai;
