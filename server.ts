import express from "express";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import routes from "./routes";
import path from "path";

config();
const PORT = Number(process.env.PORT) || 5000;
const HOST = process.env.HOST || "localhost";

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use("/api", routes);
// ruta estatica y publica para ver las imagenes
// app.use("/api/uploads", express.static(path.join(__dirname, "../uploads")));
app.listen(PORT, () => {
  console.log(`server mascotas corriendo en "${PORT}`);
});
