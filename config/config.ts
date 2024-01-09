import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(__dirname, "./env/local.env") });

const config = {
    URL_BASE: process.env.URL_BASE || "https://es.wikipedia.org/wiki/Wikipedia:Portada",
};

export default config;
