import mongoose from "mongoose";

const Schema = mongoose.Schema;

const hoaDonSchema = new Schema(
  {
    nguoiDung: { type: mongoose.Schema.Types.ObjectId, ref: "NguoiDung" },
    items: [
      {
        sanPham: {
          _id: { type: mongoose.Schema.Types.ObjectId, ref: "SanPham" },
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
        soLuong: { type: Number, default: 1 },
        thongTinKichThuoc: {
          kichThuoc: {
            tenKichThuoc: { type: String, required: true },
          },
          giaThem: { type: Number, default: 0 },
        },
        thongTinTopping: [
          {
            topping: {
              tenTopping: { type: String },
              gia: { type: Number, default: 0 },
            },
            soLuong: { type: Number, default: 1 },
          },
        ],
        da: {
          tenDa: { type: String },
        },
        ngot: {
          tenNgot: { type: String },
        },
        tra: {
          tenTra: { type: String },
        },
        khuyenMai: {
          tenKhuyenMai: { type: String },
          moTa: { type: String },
          phuongThucKhuyenMai: { type: String },
          giaTriKhuyenMai: { type: Number },
          giaTriDonHangToiThieu: { type: Number },
          giaToiDaKhuyenMai: { type: Number },
          ngayBatDau: { type: Date },
          ngayKetThuc: { type: Date },
          trangThai: { type: Number, default: 1 },
          tag: { type: String },
          isDel: { type: Boolean, default: false },
        },
        soLuongKhuyenMai: { type: Number },
        tongTien: { type: Number },
        giamGia: { type: Number },
        thanhTien: { type: Number },
      },
    ],
    tenNguoiNhan: { type: String },
    ghiChu: { type: String },
    diaChi: {
      soNha: { type: String },
      tenDuong: { type: String },
      phuong: { type: String },
      quan: { type: String },
      thanhPho: { type: String },
    },
    sdt: { type: String },
    trangThai: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "TrangThai",
    },
    thoiGianGiao: { type: Date },
    phuongThucThanhToan: { type: String },
    soLuongSanPham: { type: Number },
    chiNhanh: { type: String },
    khuyenMai: {
      tenKhuyenMai: { type: String },
      moTa: { type: String },
      phuongThucKhuyenMai: { type: String },
      giaTriKhuyenMai: { type: Number },
      giaTriDonHangToiThieu: { type: Number },
      giaToiDaKhuyenMai: { type: Number },
      ngayBatDau: { type: Date },
      ngayKetThuc: { type: Date },
      trangThai: { type: Number, default: 1 },
      tag: { type: String },
      isDel: { type: Boolean, default: false },
    },
    tongTien: { type: Number },
    giamGia: { type: Number },
    tienShip: { type: Number },
    thanhTien: { type: Number },
    isDel: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

const HoaDon = mongoose.model("HoaDon", hoaDonSchema);

export default HoaDon;
