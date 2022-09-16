// next.config.js
const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');

const nextConfig = {
  env: {
    HOST: process.env.HOST,
  },
  trailingSlash: true,
  future: {
    webpack5: true,
  },
  async headers() {
    return [
      {
        source:'/',
        headers:[
          {
            key:'Cache-Control',
            value:'no-cache'
          },
          {
            key:'Access-Control-Allow-Origin',
            value:'*',
          }
        ]
      }
    ]
  }
};

const globalConfig = {
  output: 'standalone'
}

module.exports = withPlugins([withImages, nextConfig], globalConfig);
