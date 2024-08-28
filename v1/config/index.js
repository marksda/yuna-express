import * as dotenv from "dotenv";

dotenv.config();

const { PORT, URI } = process.env;

export { PORT, URI };