import React from 'react'
import Ripple from '../../lib/material-ripple-effects'
import { colorClass, Tcolors } from '../theme'
import { AProps } from 'react-html-props'
import classnames from 'classnames'

interface DropdownLinkProps extends AProps {
	color?: Tcolors
	ripple?: 'light'|'dark'
}

const DropdownLink = ({ children, color = 'lightBlue', ripple, ...props }: DropdownLinkProps) => {
	const rippleEffect = new Ripple()
	const hoverBgColors = colorClass('hover:bg', color, { default: 500, yellow: 600 })
	const hoverShadowColors = colorClass('hover:shadow', color)

	return (
		<a
			{ ...props }
			className={ classnames('block w-full text-sm py-3 px-4 font-normal cursor-pointer whitespace-no-wrap rounded-md text-gray-900 hover:text-white transition-all duration-300', hoverBgColors, hoverShadowColors) }
			onMouseUp={ e => ripple === 'dark' && rippleEffect.create(e, ripple) }
		>
			{ children }
		</a>
	)
}

export default DropdownLink
