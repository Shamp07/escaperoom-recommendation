import path from 'path';
import { Configuration } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const config: Configuration = {
  mode: 'development',
  entry: './src',

  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@types': path.resolve(__dirname, 'src/types'),
    },
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      favicon: 'public/favicon.ico',
    }),
  ],
};

export default config;
