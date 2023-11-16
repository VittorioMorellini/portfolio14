/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    serverActions: true
  },
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
        pathname: '/VittorioMorellini/articles/main/images/**',
      },
    ],
  },
}
module.exports = nextConfig
// const withMDX = require('@next/mdx')({
//   options: {
//     remarkPlugins: [],
//     rehypePlugins: [],
//     // If you use `MDXProvider`, uncomment the following line.
//     // providerImportSource: "@mdx-js/react",
//   },
// });
// module.exports = withMDX(nextConfig);