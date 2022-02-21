import React from 'react'
import { DivProps } from 'react-html-props'
import classnames from 'classnames'

const NavbarWrapper = ({ children, className, ...props }: DivProps) => {
	return (
		<div
			{ ...props }
			className={ classnames('w-full flex justify-between lg:w-auto lg:static lg:block lg:justify-start', className) }
		>
			{ children }
		</div>
	)
}

export default NavbarWrapper
