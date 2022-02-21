import React from 'react'
import Ripple from '../../lib/material-ripple-effects'
import { colorClass, Tcolors } from '../theme'
import { ButtonProps } from 'react-html-props'
import classnames from 'classnames'

interface NavbarTogglerProps extends ButtonProps{
	color: Tcolors
	ripple: 'light'|'dark'
}

const NavbarToggler = ({ color = 'white', ripple, ...props }: NavbarTogglerProps) => {
	const rippleEffect = new Ripple()

	const colors = colorClass('bg', color, {
		default: 500,
		gray: 700,
		yellow: 600
	})
	const bgHoverColors = colorClass('hover:bg', color, 50)

	const spanClasses = 'block relative w-6 h-px rounded-sm'

	return (
		<button
			{ ...props }
			className={ classnames('cursor-pointer text-xl leading-none py-1 px-1.5 rounded-full border border-solid border-transparent bg-transparent block lg:hidden outline-none focus:outline-none transition-all duration-300', bgHoverColors, { 'hover:bg-opacity-20': color === 'white' }) }
			type="button"
			onMouseUp={ e => rippleEffect.create(e, ripple) }
		>
			<span
				className={ classnames(spanClasses, colors) }
			></span>
			<span
				className={ classnames(spanClasses, colors, 'mt-1') }
			></span>
			<span
				className={ classnames(spanClasses, colors, 'mt-1') }
			></span>
		</button>
	)
}

export default NavbarToggler
