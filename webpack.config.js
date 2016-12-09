const webpack = require(`webpack`);

module.exports = {
  watch: true,
  context: process.cwd(),
  entry: {
    main: `./main.jsx`,
    renderer: `./renderer.jsx`
  },

  plugins: [
    new webpack.optimize.DedupePlugin(),

    new webpack.optimize.UglifyJsPlugin({
      mangle: {
        except: [`$super`, `$`, `exports`, `require`]
      },
      compress: {
        warnings: false
      }
    })
  ],

  resolve: {
    extensions: [``, `.js`, `.jsx`]
  },

  module: {
    loaders: [
      {
        test: /\.jsx$/,
        exclude: /(node_modules)/,
        loader: `babel`,
        query: {
          presets: [
            [`env`, {
              targets: {
                node: `current`
              }
            }],
            `react`
          ]
        }
      },
      {
        test: /\.css$/,
        loader: `style!css`
      },
      {
        test: /\.scss$/,
        loader: `style!css!sass`
      }
    ]
  },

  devtool: `cheap-module-eval-source-map`,
  output: {
    path: `${process.cwd()}/`,
    filename: `[name].js`,
    sourceMapFilename: `[name].js.map`
  }
};
