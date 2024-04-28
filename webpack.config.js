// webpack.config.js

module.exports = {
  // other webpack configuration options...
  module: {
    rules: [
      {
        test: /\.(mp4)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "videos/",
          },
        },
      },
    ],
  },
};
