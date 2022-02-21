import React from 'react'
import { DivProps } from 'react-html-props'
import classnames from 'classnames'


const NavbarContainer = ({ children, className, ...props }: DivProps) => {
	return (
		<div className={ classnames('container max-w-7xl px-4 mx-auto flex flex-wrap items-center justify-between', className) } { ...props }>
			{ children }
		</div>
	)
}

export default NavbarContainer
