/** @type {import('next').NextConfig} */

import nextPwa from 'next-pwa'

const nextConfig = {};

const withPWA = nextPwa({
  dest: 'public'
})

export default withPWA({
    nextConfig
})
