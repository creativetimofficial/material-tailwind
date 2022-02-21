import React from 'react'
import { colorClass, Tcolors } from '../theme'
import { SpanProps } from 'react-html-props'
import classnames from 'classnames'

interface NavbarBrandProps extends SpanProps {
	color: Tcolors
}

const NavbarBrand = ({ children, color = 'white' }: NavbarBrandProps) => {
	const colors = colorClass('text', color, {
		default: 500,
		blueGray: 900,
		gray: 900,
		yellow: 600
	})

	return (
		<span className={ classnames('text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase', colors) }>
			{ children }
		</span>
	)
}

export default NavbarBrand
