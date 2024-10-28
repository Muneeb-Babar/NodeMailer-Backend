import dotenv from 'dotenv'

dotenv.config()

export const PORT=process.env.PORT
export const MONGO_URL=process.env.MONGO_URL
export const ADMIN_EMAIL=process.env.ADMIN_EMAIL
export const PASS_KEY=process.env.PASS_KEY