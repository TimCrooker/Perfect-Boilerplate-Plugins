module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	extends: [
		'standard',
		'eslint:recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:promise/recommended',
		'prettier',
	],
	parserOptions: {
		ecmaVersion: 2015,
		sourceType: 'module',
	},
	plugins: ['@typescript-eslint', 'ejs', 'prettier'],
	rules: {
		'no-var': ['error'],
		'prettier/prettier': [
			'warn',
			{
				endOfLine: 'auto',
				singleQuote: true,
				semi: false,
				printWidth: 80,
				tabWidth: 2,
				useTabs: true,
			},
		],
	},
	env: {
		// change as necessary
		node: true,
	},
}
