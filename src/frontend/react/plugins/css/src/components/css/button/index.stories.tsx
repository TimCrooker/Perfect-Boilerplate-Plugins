import React from 'react'
import { withKnobs, select } from '@storybook/addon-knobs'

import { Button as CssButton } from './index'

export default {
	title: 'Button',
	component: CssButton,
	decorators: [withKnobs],
}

export const Basic = (): React.ReactElement => <CssButton>Submit</CssButton>

export const DynamicVariables = (): React.ReactElement => {
	const label = select('label', ['Submit', 'Cancel'], 'Docs')
	return <CssButton>{label}</CssButton>
}
