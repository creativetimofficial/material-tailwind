import React, { forwardRef } from 'react'
import Icon, { IconProps } from '../Icon/Icon'
import { colorClass, Tcolors } from '../theme'
import { InputProps as IProps } from 'react-html-props'
import classnames from 'classnames'

interface InputProps extends Omit<IProps, 'size'> {
	color?: Tcolors
	size?: string
	outline?: boolean
	error?: string
	success?: string
	icon?: string|{
		name: string
		family?: 'material-icons'|'font-awesome'
		position?: 'left'|'right'
		color?: Tcolors
	}
}

const borderColors = (color: Tcolors) => colorClass('border', color, { default: 500, yellow: 600 })
const mtInputColors = (color: Tcolors) => colorClass('mt-input', color, { default: 500, yellow: 600 })
const mtInputOutlineColors = (color: Tcolors) => colorClass('mt-input-outline', color, { default: 500, yellow: 600 })

const Input = forwardRef<HTMLInputElement, InputProps>((
	{ placeholder, color = 'lightBlue', size = 'regular', outline = false, error, success, icon, ...props },
	ref
) => {
	const iconProps: IconProps = { name: '' } // TODO: I think I can do better than this
	if(typeof icon === 'string') {
		iconProps.name = icon
	} else if(typeof icon === 'object') {
		iconProps.name = icon.name
		if(icon?.family) iconProps.family = icon.family
		if(icon?.color)  iconProps.color = icon.color
	}

	let labelBorderColor = 'border-gray-300'
	let mtInputBorderColor = mtInputColors(color)
	let mtInputOutlineColor = mtInputOutlineColors(color)
	let mtInputOutlineFocusColor = borderColors(color)

	if (error) {
		labelBorderColor = borderColors('red')
		mtInputBorderColor = mtInputColors('red')
		mtInputOutlineColor = mtInputOutlineColors('red')
		mtInputOutlineFocusColor = borderColors('red')
	} else if (success) {
		labelBorderColor = borderColors('green')
		mtInputBorderColor = mtInputColors('green')
		mtInputOutlineColor = mtInputOutlineColors('green')
		mtInputOutlineFocusColor = borderColors('green')
	}

	let label = [
		'text-gray-400',
		'absolute',
		'left-0',
		`-top-${outline ? '1.5' : '0.5'}`,
		'w-full',
		'h-full',
		labelBorderColor,
		'pointer-events-none',
		{ 'border border-t-0 border-l-0 border-r-0 border-b-1': !outline },
		{ 'flex leading-10 transition-all duration-300': outline },
		{ 'text-sm': outline && size === 'sm' }
	]

	const inputClasses = [
		`${outline ? 'px-3' : 'px-0'}`,
	]

	inputClasses.concat(
		outline ? [
			mtInputOutlineColor,
			labelBorderColor,
			'mt-input-outline',
			'bg-transparent',
			'border',
			'border-1',
			'border-gray-300',
			'rounded-lg',
			'focus:border-2',
			`focus:${mtInputOutlineFocusColor}`,
		] : [
			mtInputBorderColor,
			'mt-input',
			'bg-transparent',
			'border-none',
		]
	)

	let containerHeight = 'h-11'

	if (size === 'sm') {
		containerHeight = 'h-9'
		inputClasses.concat([
			`${outline && 'pt-1.5 pb-0.5'}`,
			'text-sm',
		])
	} else if (size === 'lg') {
		containerHeight = 'h-12'
		inputClasses.push(`${outline && 'pt-3.5 pb-2.5'}`)
	} else {
		inputClasses.push(`${outline && 'pt-2.5 pb-1.5'}`)
	}

	return (
		<div className={ classnames('w-full relative', containerHeight) }>
			{ icon && <Icon { ...iconProps } /> }
			<input
				ref={ ref }
				{ ...props }
				placeholder=" "
				className={ classnames(
					'w-full h-full text-gray-800 leading-normal shadow-none outline-none focus:outline-none focus:ring-0 focus:text-gray-800',
					{ 'mt-input-outline-error': error, 'mt-input-outline-success': success },
					inputClasses
				) }
			/>
			<label className={ classnames(label) }>
				{ outline ? (
					placeholder
				) : (
					<span
						className={ `${
							size === 'sm' && 'text-sm'
						} absolute top-1/4 transition-all duration-300` }
					>
						{ placeholder }
					</span>
				) }
			</label>
			{ error && (
				<span className="block mt-1 text-xs text-red-500">{ error }</span>
			) }
			{ success && (
				<span className="block mt-1 text-xs text-green-500">
					{ success }
				</span>
			) }
		</div>
	)
})

export default Input
