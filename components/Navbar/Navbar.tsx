import React from 'react'
import { colorClass, Tcolors } from '../theme'
import { DivProps } from 'react-html-props'
import classnames from 'classnames'

interface NavbarProps extends DivProps {
	color?: Tcolors
	navbar?: boolean
}

const Navbar = ({ children, color = 'lightBlue', navbar = false, className }: NavbarProps) => {
	const colors = colorClass('bg', color, { default: 500, yellow: 600 })

	return (
		<nav className={ classnames(
			'flex flex-wrap items-center justify-between py-2.5 px-3 mb-3',
			colors,
			{ 'rounded-lg': !navbar }, className
		) }>
			{ children }
		</nav>
	)
}

export default Navbar
