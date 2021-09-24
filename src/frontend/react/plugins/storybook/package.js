module.exports = {
	apply(pkg, { css_features, ui }) {
		if (css_features !== 'styled-components') {
			delete pkg.devDependencies['storybook-addon-styled-component-theme']
		}
		if (css_features !== 'scss') {
			delete pkg.devDependencies['@storybook/preset-scss']
		}
		if (!ui.includes('tailwind')) {
			delete pkg.devDependencies['@storybook/addon-postcss']
		}

		return pkg
	},
}
