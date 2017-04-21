const webpack = require(`webpack`);

module.exports = {
  context: process.cwd(),

  target: `electron-renderer`,

  entry: {
    main: `./main.jsx`,
    renderer: `./renderer.jsx`
  },
  output: {
    path: `${process.cwd()}/`,
    filename: `[name].js`,
    sourceMapFilename: `[name].js.map`
  },

  resolve: {
    extensions: [`.js`, `.jsx`]
  },

  // devtool: `cheap-module-eval-source-map`, // Not working 2017-03-25
  devtool: `source-map`,

  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: /(node_modules)/,
        loader: `babel-loader`,
        options: {
          presets: [
            [`env`, {
              targets: {
                node: `current`
              },
              modules: false
            }],

            `react`
          ],
          env: {
            development: {
              presets: [`react-hmre`]
            },
            production: {
              presets: [`babili`]
            }
          }
        }
      },
      {
        test: /\.css$/,
        use: [`style-loader`, `css-loader`]
      },
      {
        test: /(\.scss|\.sass)$/,
        use: [`style-loader`, `css-loader`, `sass-loader`]
      }
    ]
  },

  devServer: {
    compress: true
  }
};
