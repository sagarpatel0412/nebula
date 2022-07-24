/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};
const dotenv = require("dotenv");
const res = dotenv.config({ path: "./.env" });

module.exports = {
  env: {
    ENV: res.parsed.ENV,
    PORT: res.parsed.PORT,
    FRONTEND: res.parsed.FRONTEND,
    BACKEND: res.parsed.BACKEND,
  },
  nextConfig,
};
