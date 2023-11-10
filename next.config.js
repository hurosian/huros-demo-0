/** @type {import('next').NextConfig} */
const nextConfig = {
      images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'images.montro.com',
            port: '',
            pathname: '/**',
          },
          {
            protocol: "https",
            hostname: 'cdn.watchbase.com',
            port: '',
            pathname: '/**',
          }
        ],
      }
}

module.exports = nextConfig
