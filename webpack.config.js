const { merge } = require("webpack-merge");

const baseConfig = require("./webpackConfig/configs/baseWebpack.config");
const devConfig = require("./webpackConfig/configs/devWebpack.config");
const prodConfig = require("./webpackConfig/configs/prodWebpack.config");

//////////////////////////////
module.exports = (env) => {
  // const isDev = env.mode === "development";
  const isProd = env.mode === "production";

  const config = isProd
    ? merge(baseConfig(env), prodConfig(env))
    : merge(baseConfig(env), devConfig(env));

  return config;
};
////////////////////////////
////////////////////////////
////////////////////////////
////////////////////////////

// // const images = require("webpack/images")

//       rules: [
//
//         {
//           test: /\.(png|jpe?g|gif|svg)$/i,
//           use: [
//             {
//               loader: "file-loader",
//             },
//           ],
//           options: {
//             name: "images/[name].[ext]",
//           },
//         },
//       ],
//     },
