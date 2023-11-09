import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);import path from 'path'

export default {
  mode: 'production',
  entry: {
    index: './src/index.js'
	},
  experiments: {outputModule: true},
	externals: {
		mermaid: 'mermaid',
	},
  output: {
    path: path.join(__dirname, 'dist'),
	filename: '[name].js',
	libraryTarget: 'module'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
		  options: {
			  presets: ['@babel/preset-env'],
			}
        }
      }
    ]
	},
  devtool: 'source-map'
}
