"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = require("dotenv");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes"));
const path_1 = __importDefault(require("path"));
(0, dotenv_1.config)();
const PORT = Number(process.env.PORT) || 5000;
const HOST = process.env.HOST || "localhost";
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use("/api", routes_1.default);
// ruta estatica y publica para ver las imagenes
app.use("/api/uploads", express_1.default.static(path_1.default.join(__dirname, "../uploads")));
app.listen(PORT, () => {
    console.log(`server mascotas corriendo en "${PORT}`);
});
