var path = require('path');

module.exports = {
	devtool: 'source-map',
	debug: true,
	entry: {
		main: './app/index.js'
	},
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'index.js',
		publicPath: '/dist/'
	},
	module: {
		loaders: [{
			test: /\.scss$/,
			exclude: /node_modules/,
		    loaders: ['style', 'css', 'sass?sourceMap']
		}, {
            test: /\.woff2?$|\.ttf$|\.eot$|\.svg$/,
            loader: "file"
        }]
	}
}
