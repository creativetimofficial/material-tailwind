import React, { forwardRef } from 'react'
import { colorClass, Tcolors } from '../theme'
import { TextAreaProps } from 'react-html-props'
import classnames from 'classnames'

const mtTextareaColors        = (color: Tcolors) => colorClass('mt-input', color, { default: 500, yellow: 600 })
const mtTextareaOutlineColors = (color: Tcolors) => colorClass('mt-input-outline', color, { default:500, yellow: 600 })
const borderColors            = (color: Tcolors) => colorClass('border', color, { default: 500, yellow: 600 })
const focusBorderColors       = (color: Tcolors) => colorClass('focus:border', color, { default: 500, yellow: 600 })

interface ThisTextareaProps extends TextAreaProps {
	color?: Tcolors
	size?: 'sm'|'regular'|'lg'
	outline?: boolean
	error?: string
	success?: string
}

const Textarea = forwardRef<HTMLTextAreaElement, ThisTextareaProps>((
	{ placeholder, color = 'lightBlue', size = 'regular', outline = false, error, success, ...props },
	ref
) => {
	let labelBorderColor = 'border-gray-300'
	let mtTextareaBorderColor = mtTextareaColors(color)
	let mtTextareaOutlineColor = mtTextareaOutlineColors(color)
	let mtTextareaOutlineFocusColor = borderColors(color)

	if (error) {
		labelBorderColor = borderColors('red')
		mtTextareaBorderColor = mtTextareaColors('red')
		mtTextareaOutlineColor = mtTextareaOutlineColors('red')
		mtTextareaOutlineFocusColor = focusBorderColors('red')
	} else if (success) {
		labelBorderColor = borderColors('green')
		mtTextareaBorderColor = mtTextareaColors('green')
		mtTextareaOutlineColor = mtTextareaOutlineColors('green')
		mtTextareaOutlineFocusColor = focusBorderColors('green')
	}

	let label = [
		'text-gray-400',
		'absolute',
		'left-0',
		`${outline ? '-top-1.5' : '-top-0.5'}`,
		'w-full',
		'h-full',
		`${!outline && 'border border-t-0 border-l-0 border-r-0 border-b-1'}`,
		labelBorderColor,
		'pointer-events-none',
		`${outline && 'flex'}`,
		`${outline && size === 'sm' && 'text-sm'}`,
		`${outline && 'leading-10'}`,
		`${outline && 'transition-all'}`,
		`${outline && 'duration-300'}`,
	]

	const sharedClasses = [
		'w-full',
		'h-full',
		'text-gray-800',
		'leading-normal',
		'shadow-none',
		'outline-none',
		'resize-none',
		'focus:outline-none',
		'focus:ring-0',
		'focus:text-gray-800',
	]
	const textareaSM = [
		`${outline ? 'px-3' : 'px-0'}`,
		`${outline && 'pt-1.5 pb-0.5'}`,
		'text-sm',
	]
	const textareaRegular = [
		`${outline ? 'px-3' : 'px-0'}`,
		`${outline && 'pt-2.5 pb-1.5'}`,
	]

	const textareaFilled = [
		mtTextareaBorderColor,
		'mt-input',
		'texterea',
		'bg-transparent',
		'border-none',
	]

	const textareaOutline = [
		mtTextareaOutlineColor,
		labelBorderColor,
		'mt-input-outline',
		'bg-transparent',
		'border',
		'border-1',
		'border-gray-300',
		'rounded-lg',
		'focus:border-2',
	]

	return (
		<div className='relative w-full h-auto'>
			<textarea
				ref={ ref }
				{ ...props }
				placeholder=" "
				className={ classnames(
					sharedClasses,
					size === 'sm' ? textareaSM : textareaRegular,
					outline ? textareaOutline : textareaFilled,
					{ 'mt-input-outline-error': error && outline },
					{ 'mt-input-outline-success': success && outline }
				) }
				rows={ 7 }
			/>
			<label className={ classnames(label) }>
				{ outline ? (
					placeholder
				) : (
					<span
						className={ `${
							size === 'sm' && 'text-sm'
						} absolute top-0 transition-all duration-300` }
					>
						{ placeholder }
					</span>
				) }
			</label>
			{ error && (
				<span
					className={ `block absolute ${
						outline ? '-bottom-4' : '-bottom-5'
					} text-xs text-red-500` }
				>
					{ error }
				</span>
			) }
			{ success && (
				<span
					className={ `block absolute ${
						outline ? '-bottom-4' : '-bottom-5'
					} text-xs text-green-500` }
				>
					{ success }
				</span>
			) }
		</div>
	)
})

export default Textarea
