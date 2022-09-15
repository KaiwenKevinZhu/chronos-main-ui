// next.config.js
const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');

const nextConfig = {
  env: {
    HOST: process.env.HOST,
  },
  trailingSlash: true
};

const globalConfig = {
  output: 'standalone'
}

module.exports = withPlugins([withImages, nextConfig], globalConfig);
