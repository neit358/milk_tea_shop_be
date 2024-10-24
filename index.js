import express from "express";
import dotenv from "dotenv";
import route from "./src/routes/index.routes.js";
import bodyParser from "body-parser";
import connectMongoDB from "./src/database/config/mongodb.js";
import errorHandler from "./src/middleware/errorHandler.js";
import cors from "cors";
import session from "express-session";
import mongoStore from "connect-mongo";

const app = express();
dotenv.config();

const port = process.env.PORT || 3002;

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(
  session({
    name: "room-be",
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    store: mongoStore.create({
      mongoUrl: `${process.env.MONGODB_URL}/${process.env.MONGODB_NAME}`,
      ttl: process.env.SESSION_TTL,
      collectionName: process.env.SESSION_COLLECTION_NAME,
    }),
    cookie: { maxAge: Number(process.env.SESSION_MAX_AGE) },
  })
);

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

connectMongoDB();

route(app);

errorHandler(app);

app.listen(port, () => {
  console.log(`Listening port ${port}`);
});
