var webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
//webpack은 require을 클라이언트 사이드로 돌리고, 각각의 모듈을 한 파일로 합칠 수 있게 도와준다.

module.exports = {
    entry: [
      'babel-polyfill',
      'react-hot-loader/patch',
      './src/index.js'
    ],

    output: {
        path: __dirname + '/public/',
        filename: 'bundle.js'
    },

    devServer: {
        hot: true,
        inline: true,
        host: '0.0.0.0',
        port: 4000,
        contentBase: __dirname + '/public/',
    },

    module: {
        loaders: [ //전체 프로그램이 어떤 로더를 사용해서 돌아갈지 지정
            {
                test: /\.js$/,
                loaders: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    cacheDirectory: true,
                    presets: [['es2015', {module:false}], 'react', 'stage-0']
                }
            }
        ]
    },

    plugins: [
      new CleanWebpackPlugin(['dist']),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
}
