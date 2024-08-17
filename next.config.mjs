/** @type {import('next').NextConfig} */
const nextConfig = {

  enabled: process.env.NODE_ENV === "production",
};

export default nextConfig;