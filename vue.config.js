const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
})
// module.exports = {
//     devServer: {
//       proxy: {
//         '/User/login': {
//           target: '/User/login',// 后端接口
//           changeOrigin: true, // 是否跨域
//           pathRewrite: {
//             '/User/login': ''
//           }
//         }
//       }
//     }
//   }
//
//

// module.exports = {
//     lintOnSave:false,
//     devServer: {
//       proxy: {
//         '/api': {
//           target: 'http://127.0.0.1:8000/api/',// 后端接口
//           changeOrigin: true, // 是否跨域
//           pathRewrite: {
//             '/api': ''
//           }
//         }
//       }
//     }
//   }


