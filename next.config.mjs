import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        'worker_threads': false,
        'assert': false,
        'fs': false,
        'path': false,
        'os': false,
        'stream': false,
        'buffer': false,
      };
    }

    return config;
  },
};

export default withPayload(nextConfig, {
  devBundleServerPackages: false,
});
