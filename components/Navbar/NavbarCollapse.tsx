import React from 'react'
import { DivProps } from 'react-html-props'
import classnames from 'classnames'

interface NavbarCollapse extends DivProps {
	open: boolean
}

const NavbarCollapse = ({ children, className, open }: NavbarCollapse) => {
	return (
		<div
			className={ classnames('lg:flex flex-grow items-center', open ? 'block' : 'hidden', className) }
		>
			{ children }
		</div>
	)
}

export default NavbarCollapse
