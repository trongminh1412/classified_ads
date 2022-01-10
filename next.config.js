// const path = require('path');
module.exports = {
  reactStrictMode: true,
  serverRuntimeConfig: {
    secret: 'VERIFY JWT TOKENS',
  },
  publicRuntimeConfig: {
    apiUrl:
      process.env.NODE_ENV === 'development'
        ? 'https://classified-ads-tau.vercel.app/api' // development api
        : 'https://classified-ads-tau.vercel.app/api', // production api
  },
  images: {
    domains: ['https:/img-7hit-com.s3.ap-northeast-2.amazonaws.com'],
  },
  // webpack: (config) => {
  //   config.resolve.modules.push(path.resolve('.'));

  //   return config;
  // },
};
