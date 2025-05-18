/** @type {import('next').NextConfig} */

import nextPwa from 'next-pwa'

const nextConfig = {};

const withPWA = nextPwa({
  dest: 'public',
  async headers() {
    return [
      {
        source: '/sw.js',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/javascript; charset=utf-8',
          },
          {
            key: 'Cache-Control',
            value: 'no-cache, no-store, must-revalidate',
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self'",
          },
        ],
      },
    ]
  }
})

export default withPWA({
  nextConfig
})
