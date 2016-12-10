const webpack = require(`webpack`);

module.exports = {
  context: process.cwd(),

  target: `electron-renderer`,

  entry: {
    main: `./main.jsx`,
    renderer: `./renderer.jsx`
  },

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
          ],
          env: {
            production: {
              presets: [`babili`]
            }
          }
        }
      },
      {
        test: /\.css$/,
        loader: `style!css`
      },
      {
        test: /(\.scss|\.sass)$/,
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
