'use strict';

const path = require('path');

module.exports = {
    entry: './index.js',
    context: path.resolve(__dirname),
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js',
    },
    devServer: {
        contentBase: "./dist",//本地服务器加载index.html页面所在的目录，这里写的是根目录
        inline: true, //实时刷新,
        historyApiFallback: true,//不跳转
    },
    mode: "development",
    devtool: 'source-map',
   
};
