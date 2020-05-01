const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");

const config = {
  entry: "./public/assets/js/app.js",
  output: {
    path: __dirname + "/public/dist",
    filename: "bundle.js"
  },
  mode: "development",
  plugins: [
    new WebpackPwaManifest({
      name: "Budgeting Tracker App",
      short_name: "Budgeting Tracker  App",
      description: "An application for budgeting",
      background_color: "#01579b",
      theme_color: "#ffffff",
      "theme-color": "#ffffff",
      start_url: "/",
      icons: [
        {
          src: path.resolve("public/icons/icon-192x192.png"),
          sizes: [192, 512],
          destination: path.join("assets", "icons")
        }
      ]
    })
  ],
  
};

module.exports = config;
