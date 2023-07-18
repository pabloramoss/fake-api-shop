/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://simpleapistore.vercel.app/:path*',
      },
    ]
  }
}

module.exports = nextConfig
