module.exports = function override(config, env) {
  config.module.rules.push({
    test: /\.mdx$/,
    use: ['babel-loader', '@mdx-js/loader'],
  });
  return config;
};
