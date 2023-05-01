const { defineConfig } = require('@vue/cli-service')
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')


module.exports = defineConfig({
  publicPath: '/LostAndFound-admin/',//部署服务器时候的路径
  transpileDependencies: true,
  configureWebpack: {
    plugins: [new NodePolyfillPlugin()]
  },//以下为解决跨域问题
  /* devServer: {
    proxy: {
      "/proxy_url":{           // /proxy_url 这个用来和根路径 baseURL 进行匹配
        target:' http://',//'http://127.0.0.1:3001',  // 这个是填写跨域的请求域名+端口号，也就是要请求的URL(不包含URL路径)
        changeOrigin: true,  // 是否允许跨域请求，在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
        pathRewrite: {   // 路径重写
            '^/proxy_url': '/' // 替换target中的请求地址，原请求为 http://127.0.0.1:8000/kuayu 实际请求为 http://127.0.0.1:8000/proxy_url/kuayu  
        }
      }
    }
  } */
  /* devServer: {
    proxy:{
      '/api':{
        target:'http://',//产生跨域的地址
        changeOrigin:true
      }
    }
  } */

})
