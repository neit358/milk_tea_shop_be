import mongoose from "mongoose";

function connectMongoDB() {
  mongoose
    .connect(`${process.env.MONGODB_URL}/${process.env.MONGODB_NAME}`)
    .then(() => {
      console.log("MongoDB connect: success!");
    })
    .catch((err) => console.log(err));
}

export default connectMongoDB;
