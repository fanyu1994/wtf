const path = require('path')

module.exports = {
  entry: './src/index.js',
  output:{
    filename: 'lodash-fy-webpack.js',
    path: path.resolve(__dirname, 'dist'),
    library: {
      name:'lodash-fy-webpack',
      type:'umd'
    },
    clean:true
  },
  externals:{
    // 这里可以做一些排外的库

  }
}