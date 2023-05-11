/** @type {import('next').NextConfig} */

const withTM = require('next-transpile-modules')([
    '@ionic/react',
    '@ionic/core',
    '@stencil/core',
    'ionicons',
])

const nextConfig = withTM({
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: ['@svgr/webpack'],
        })

        config.optimization.minimize = false

        return config
    },
    reactStrictMode: true,
    swcMinify: true,
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
            },
        ],
    },
})

module.exports = nextConfig
