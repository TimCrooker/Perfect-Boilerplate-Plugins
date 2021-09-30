module.exports = {
	apply(pkg, { css_features }) {
		if (css_features !== 'scss') {
			delete pkg.devDependencies['stylelint-scss']
		}

		return pkg
	},
}
