/** @type {import('next').NextConfig} */

const nextConfig = {
  //output: "standalone",
  // experimental: {
  //   serverActions: true
  // },
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
  webpack: (config, { dev, isServer, webpack, nextRuntime }) => {
    config.module.rules.push({
      test: /\.node$/,
      use: [
        {
          loader: "nextjs-node-loader",
          options: {
            outputPath: config.output.path
          }
        },
      ],
    });
    return config;
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