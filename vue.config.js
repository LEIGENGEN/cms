const path = require("path");
module.exports = {
  publicPath: "/cms-manage/", // 部署应用包时的基本 URL
  outputDir: "dist",
  devServer: {
    host: "127.0.0.1",
    port: 3011,
    open: true,
    openPage: "cms-manage/",
  },
  chainWebpack: (config) => {
    const types = ["vue-modules", "vue", "normal-modules", "normal"];
    types.forEach((type) =>
      addStyleResource(config.module.rule("less").oneOf(type))
    );
    config.resolve.alias.set("@", path.resolve(__dirname, "./src")); // 设置别名
  },
};

function addStyleResource(rule) {
  rule
    .use("style-resource")
    .loader("style-resources-loader")
    .options({
      patterns: [path.resolve(__dirname, "./src/styles/mixin.less")],
    });
}
