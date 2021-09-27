import React from 'react'
import './index.css'
import { Button } from '@/components/css'

export const Main: React.FC = () => {
	return (
		<div className="main">
			<h1>superplate</h1>
			<p>The frontend boilerplate with superpowers!</p>
			<Button>Docs</Button>
		</div>
	)
}
