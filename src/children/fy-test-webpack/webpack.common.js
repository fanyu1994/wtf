const path = require('path');
const { VueLoaderPlugin } = require('vue-loader')


module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './lib'),
    filename: 'fy-test-webpack.common.js',
    chunkFilename: '[id].js',
    libraryExport: 'default',
    library: 'fy-test-webpack',
    libraryTarget: 'commonjs2'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      main: path.resolve(__dirname, '../src'),
      packages: path.resolve(__dirname, '../packages'),
      'fy-test-webpack': path.resolve(__dirname, '../')
    },
    modules: ['node_modules']
  },
  externals: {
    vue: {
      root: "Vue",   //通过 script 标签引入，此时全局变量中可以访问的是 Vue
      commonjs: "vue",  //可以将vue作为一个 CommonJS 模块访问
      commonjs2: "vue",  //和上面的类似，但导出的是 module.exports.default
      amd: "vue"   //类似于 commonjs，但使用 AMD 模块系统
    }
  },
  performance: {
    hints: false
  },
  stats: {
    children: false
  },
  optimization: {
    minimize: false
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use:  ['vue-loader']
      },
      {
        test: /\.css$/,
        use:  ['style-loader','css-loader','postcss-loader']
      },
      {
          test: /\.less$/i,
          use:  ['style-loader','css-loader','postcss-loader','less-loader']
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
};