const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

module.exports = {
	mode: 'development',
	output: {
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/',
		filename: 'bundle.js',
	},
	entry: './src/index.tsx',
	module: {
		rules: [
			// typescript transpiling
			{
				test: /\.(ts|js)x?$/i,
				loader: 'ts-loader',
			},
			// global css files
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
	resolve: {
		plugins: [new TsconfigPathsPlugin()],
		extensions: ['.tsx', '.ts', '.js'],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'src/index.html',
		}),
	],
	devtool: 'inline-source-map',
}
