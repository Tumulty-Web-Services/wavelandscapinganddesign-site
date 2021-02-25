module.exports = {
  images: {
    domains: ['res.cloudinary.com'],
  },
  target: 'serverless',
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./utils/generate-sitemap');
    }

    return config;
  },
};
