module.exports = {
  future: {
    webpack5: true,
  },
  images: {
    loader: 'cloudinary',
    path: 'https://res.cloudinary.com/tumulty-web-services/image/upload',
  },
  target: 'serverless',
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./utils/generate-sitemap');
    }

    return config;
  },
};
