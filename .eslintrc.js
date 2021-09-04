module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	extends: [
		'standard',
		'eslint:recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:import/errors',
		'plugin:import/warnings',
		'plugin:import/typescript',
		'plugin:promise/recommended',
		'prettier',
	],
	parserOptions: {
		ecmaVersion: 2015,
		sourceType: 'module',
	},
	plugins: ['prettier', '@typescript-eslint', 'ejs'],
	rules: {
		// 'comma-dangle': ['error', 'always-multiline'],
		// 'no-empty-pattern': ['off'],
		// 'no-undef': ['error'],
		'no-var': ['error'],
		// 'object-curly-spacing': ['error', 'always'],
		// indent: ['off'],
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
