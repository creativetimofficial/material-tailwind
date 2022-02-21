import React from 'react'
import { DivProps } from 'react-html-props'

interface TabPaneProps extends DivProps {
	active?: boolean
}

const TabPane = ({ children, active = false, className }: TabPaneProps) => {
	return (
		<div className={ `${active ? 'block' : 'hidden'} ${className}` }>
			{ children }
		</div>
	)
}

export default TabPane
