/** @type {import('next').NextConfig} */
const webpack = require('webpack')
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['ipfs.infura.io','ipfs.moralis.io'],
  },
  webpack: (config, { dev }) => {
    config.plugins.push(
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery',
        })
    )
    return config
}
};
