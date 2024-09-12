import * as dotenv from "dotenv";

dotenv.config();

const { PORT, URI, HOSTNAME } = process.env;

export { PORT, URI, HOSTNAME };