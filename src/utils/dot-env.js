const isProduction = process.env.NODE_ENV === 'production'

if (!isProduction) {
	require('dotenv').config({
		path: `.env.${process.env.NODE_ENV || 'development'}`,
	})
}
