import React, { forwardRef } from 'react'
import { colorClass, Tcolors } from '../theme'
import Ripple from '../../lib/material-ripple-effects'
import classnames from 'classnames'
import { ButtonProps } from 'react-html-props'

interface ThisButtonProps extends ButtonProps {
	color?: Tcolors
	buttonType?: 'filled'|'outline'|'link'
	size?: 'sm'|'regular'|'lg'
	rounded?: boolean
	iconOnly?: boolean
	block?: boolean
	ripple?: string
}
export type { ThisButtonProps as ButtonProps }

const Button = forwardRef<HTMLButtonElement, ThisButtonProps>((
	{ children, color = 'lightBlue', buttonType = 'filled', size = 'regular', rounded = false, iconOnly, block = false, ripple, className, ...props },
	ref
) => {
	const filledBg           = colorClass('bg', color, { default: 500, yellow: 600 })
	const filledBgHover      = colorClass('hover:bg', color, 700)
	const filledBgFocus      = colorClass('focus:bg', color, { default: 400, yellow: 500 })
	const filledBgActive     = colorClass('active:bg', color, 800)
	const filledShadow       = colorClass('shadow-md', color)
	const filledShadowHover  = colorClass('hover:shadow-lg', color)
	const outlineText        = colorClass('text', color, { default: 500, yellow: 600 })
	const outlineBorder      = colorClass('border', color, { default: 500, yellow: 600 })
	const outlineBgHover     = colorClass('hover:bg', color, 50)
	const outlineBorderHover = colorClass('hover:border', color, 700)
	const outlineTextHover   = colorClass('hover:text', color, 700)
	const outlineBgActive    = colorClass('active:bg', color, 100)

	const rippleEffect = new Ripple()

	const buttonFilled = [
		'text-white',
		filledBg,
		filledBgHover,
		filledBgFocus,
		filledBgActive,
		filledShadow,
		filledShadowHover,
	]

	const buttonOutline = [
		'bg-transparent',
		'border',
		'border-solid',
		'shadow-none',
		outlineText,
		outlineBorder,
		outlineBgHover,
		outlineBorderHover,
		outlineTextHover,
		outlineBgHover,
		outlineBgActive,
	]

	const buttonLink = [
		'bg-transparent',
		outlineText,
		outlineBgHover,
		outlineTextHover,
		outlineBgHover,
		outlineBgActive,
	]

	const buttonSM = [
		iconOnly ? 'w-8 h-8 p-0 grid place-items-center' : 'py-1.5 px-4',
		'text-xs',
		'leading-normal',
	]
	const buttonRegular = [
		iconOnly ? 'w-10 h-10 p-0 grid place-items-center' : 'py-2.5 px-6',
		'text-xs',
		'leading-normal',
	]
	const buttonLG = [
		iconOnly ? 'w-12 h-12 p-0 grid place-items-center' : 'py-3 px-7',
		'text-sm',
		'leading-relaxed',
	]

	const sharedClasses = [
		{ 'w-full': block },
		`rounded-${rounded ? 'full' : 'lg'}`,
		'flex',
		'items-center',
		'justify-center',
		'gap-1',
		'font-bold',
		'outline-none',
		'uppercase',
		'tracking-wider',
		'focus:outline-none',
		'focus:shadow-none',
		'transition-all',
		'duration-300',
	]

	const classes: Array<string> = []

	if (size === 'sm') {
		classes.push(...buttonSM)
	} else if (size === 'lg') {
		classes.push(...buttonLG)
	} else {
		classes.push(...buttonRegular)
	}

	if (buttonType === 'outline') {
		classes.push(...buttonOutline)
	} else if (buttonType === 'link') {
		classes.push(...buttonLink)
	} else {
		classes.push(...buttonFilled)
	}

	return (
		<button
			ref={ ref }
			{ ...props }
			className={ classnames(sharedClasses, classes) }
			onMouseUp={ (e) => {
				ripple === 'dark' && rippleEffect.create(e, 'dark')
				ripple === 'light' && rippleEffect.create(e, 'light')
			} }
		>
			{ children }
		</button>
	)
})

export default Button
