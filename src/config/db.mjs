import mongoose from "mongoose"
import { MONGO_URL } from "./envoirment.mjs"

mongoose.connect(MONGO_URL);

export default mongoose