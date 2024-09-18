import * as dotenv from "dotenv";

dotenv.config();

const { PORT, URIDB, HOSTNAME } = process.env;

export { PORT, URIDB, HOSTNAME };