import type { NextConfig } from "next";

const allowedDevOrigins = [
  "*.ngrok-free.dev",
  "*.ngrok.io",
  "*.ngrok.app",
  "localhost:3000",
  "collotypic-jamaal-haughtiest.ngrok-free.dev",
];

if (process.env.ALLOWED_DEV_ORIGINS) {
  process.env.ALLOWED_DEV_ORIGINS.split(",").forEach((origin) => {
    const trimmed = origin.trim();
    if (trimmed && !allowedDevOrigins.includes(trimmed)) {
      allowedDevOrigins.push(trimmed);
    }
  });
}

const nextConfig: NextConfig = {
  allowedDevOrigins,
};

export default nextConfig;
