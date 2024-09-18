import * as dotenv from "dotenv";

dotenv.config();

const { PORT, URIDB, HOSTNAME, SECRET_ACCESS_TOKEN } = process.env;

export { PORT, URIDB, HOSTNAME, SECRET_ACCESS_TOKEN };