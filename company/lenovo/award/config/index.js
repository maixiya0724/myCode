// see http://vuejs-templates.github.io/webpack for documentation.
let path = require('path');

let env = process.env.NODE_ENV;

let publicPath = {
    dev: '/',
    test: '/',
    demo: '/',
    // production: 'http://image.lex.lenovo.com.cn/operation/',
    production: '/',
};
console.log('构建环境输出:');
console.log(publicPath[env], env);

module.exports = {
    build: {
        env: require('./prod.env'),
        index: path.resolve(__dirname, '../dist/index.html'),
        assetsRoot: path.resolve(__dirname, '../dist'),
        assetsSubDirectory: 'static',
        assetsPublicPath: publicPath[env],
        productionSourceMap: true,
        // Gzip off by default as many popular static hosts such as
        // Surge or Netlify already gzip all static assets for you.
        // Before setting to `true`, make sure to:
        // npm install --save-dev compression-webpack-plugin
        productionGzip: false,
        productionGzipExtensions: ['js', 'css'],
        // Run the build command with an extra argument to
        // View the bundle analyzer report after build finishes:
        // `npm run build --report`
        // Set to `true` or `false` to always turn it on or off
        bundleAnalyzerReport: process.env.npm_config_report
    },
    dev: {
        env: require('./dev.env'),
        // 这里为了方便改成8080
        port: 8080,
        autoOpenBrowser: true,
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        proxyTable: {
            '/back': {
                 target: "https://gamecent-dev.vgs.lenovo.com.cn/back/game", //测试地址
                //target: "https://gamecent.vgs.lenovo.com.cn", //正式地址
                 //target: 'http://10.103.163.145:8080/',
                 pathRewrite: {
                    '^/back': ''
                 },
                changeOrigin: true
            },
           '/lenovoId':{
                target:'https://privilege.lenovo.com.cn',
                changeOrigin: true,
                pathRewrite: {
                    '^/lenovoId': ''
                },

            }
        },
        // CSS Sourcemaps off by default because relative paths are "buggy"
        // with this option, according to the CSS-Loader README
        // (https://github.com/webpack/css-loader#sourcemaps)
        // In our experience, they generally work as expected,
        // just be aware of this issue when enabling this option.
        cssSourceMap: false
    }
};