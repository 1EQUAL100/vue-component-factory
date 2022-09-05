const path = require("path")
function resolve(dir) {
  return path.join(__dirname, dir)
}

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: "dist",
  assetsDir: "assets",
  pages: {
    index: {
      entry: "examples/main.js",
      template: "examples/public/index.html",
      filename: "index.html"
    },
  },
  chainWebpack: config => {
    config.resolve.alias
      .set("@packages", resolve("packages"))
  }
})
