// const path = require('path');
module.exports = {
  reactStrictMode: true,
  serverRuntimeConfig: {
    mySecret: 'secret',
    secondSecret: process.env.NEXT_PUBLIC_SECOND_SECRET,
  },
  publicRuntimeConfig: {
    apiUrl:
      process.env.NODE_ENV === 'development'
        ? process.env.NEXT_PUBLIC_API_URL // development api
        : process.env.NEXT_PUBLIC_API_URL, // production api
  },
  images: {
    domains: ['https:/img-7hit-com.s3.ap-northeast-2.amazonaws.com'],
  },
  // webpack: (config) => {
  //   config.resolve.modules.push(path.resolve('.'));

  //   return config;
  // },
};
