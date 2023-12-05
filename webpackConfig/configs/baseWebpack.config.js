const HtmlWebpackPlugin = require("html-webpack-plugin");
const pathDirect = require("../../webpackConfig/utils/paths");

module.exports = (env) => {
  const config = {
    mode: env.mode ?? "development",
    entry: pathDirect.ENTRY_POINT,
    output: {
      filename: "[name].[contenthash].js",
      path: pathDirect.BUILD_DIR,
      clean: true,
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: pathDirect.PUBLIC_POINT,
      }),
    ],

    module: {
      rules: [
        { test: /\.hbs$/, loader: "handlebars-loader" },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: "asset/resource",
        },
      ],
    },
  };

  return config;
};
