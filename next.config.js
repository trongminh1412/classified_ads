// const path = require('path');
module.exports = {
  reactStrictMode: true,
  serverRuntimeConfig: {
    secret: '66644c04-5a68-40a4-b130-7a970acb0093',
  },
  publicRuntimeConfig: {
    apiUrl:
      process.env.NODE_ENV === 'development'
        ? process.env.API_URL // development api
        : process.env.API_URL, // production api
  },
  images: {
    domains: ['https:/img-7hit-com.s3.ap-northeast-2.amazonaws.com'],
  },
  // webpack: (config) => {
  //   config.resolve.modules.push(path.resolve('.'));

  //   return config;
  // },
};
