import dotenv from 'dotenv';
dotenv.config();

export default {
  PORT: process.env.PORT || 4000,
  RESEND_API_KEY: process.env.RESEND_API_KEY
};