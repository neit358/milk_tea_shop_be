import mongoose from "mongoose";

const Schema = mongoose.Schema;

const daSchema = new Schema(
  {
    tenDa: { type: String },
  },
  {
    timestamps: true,
  }
);

const Da = mongoose.model("Da", daSchema);

export default Da;
