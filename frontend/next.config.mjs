import path from 'path';
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Limit file tracing to the project root to avoid scanning unrelated lockfiles
  outputFileTracingRoot: path.join(process.cwd(), '..'),
};

export default nextConfig;

