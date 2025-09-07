import type { NextConfig } from "next";
/** @type {import('next').NextConfig} */

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/winner-sweepstakes-3' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/winner-sweepstakes-3' : '',
};

export default nextConfig;
