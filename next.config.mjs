/** @type {import('next').NextConfig} */

import nextPwa from 'next-pwa'

const nextConfig = {};

const withPWA = nextPwa({
  dest: 'public',
  sw: 'sw.js'
})

export default withPWA({
  nextConfig
})
