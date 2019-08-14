module.exports = {
  // publicPath: "",
  runtimeCompiler: true,

  devServer: {
    proxy: {
      "http://www.panacherock.com/downloads/mp3/01_05_Shes_Mine.mp3": {
        target: "http://www.panacherock.com/downloads/mp3/01_05_Shes_Mine.mp3",
        changeOrigin: true
      }
    },
    // host: "192.168.99.190"
  },

  configureWebpack: {
    devtool: "source-map"
  },

  transpileDependencies: ["vue-echarts","resize-detector"],

  chainWebpack: config => {
    config.plugins.delete("named-chunks");
    config.module
      .rule("vue")
      .use("vue-loader")
      .loader("vue-loader")
      .tap(options => {
        options.prettify = false;
        return options;
      });
  },

  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: [
        '/',
        '/#/'
      ],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true
    }
  }
};
