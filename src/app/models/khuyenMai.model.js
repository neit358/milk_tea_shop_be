import mongoose from "mongoose";

const Schema = mongoose.Schema;

const khuyenMaiSchema = new Schema(
  {
    tenKhuyenMai: { type: String },
    moTa: { type: String },
    phuongThucKhuyenMai: { type: String },
    giaTriKhuyenMai: { type: Number },
    giaTriDonHangToiThieu: { type: Number },
    giaToiDaKhuyenMai: { type: Number },
    ngayBatDau: { type: Date },
    ngayKetThuc: { type: Date },
    trangThai: { type: Boolean, default: true },
    tag: { type: String },
    isDel: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

const KhuyenMai = mongoose.model("KhuyenMai", khuyenMaiSchema);

export default KhuyenMai;
