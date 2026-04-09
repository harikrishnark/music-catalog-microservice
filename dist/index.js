"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const music_routes_1 = __importDefault(require("./routes/music.routes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
// Middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// API Entry point
app.get('/', (req, res) => {
    res.send('Sony Music Backend Microservice - Status: Operational (API v1)');
});
// Routing
app.use('/api/v1/music', music_routes_1.default);
// Server instantiation
app.listen(port, () => {
    console.log(`[server]: Headless CMS Microservice is running at http://localhost:${port}`);
});
