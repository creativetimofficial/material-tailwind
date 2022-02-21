import React, { forwardRef } from 'react'
import Ripple from '../../lib/material-ripple-effects'
import Tippy from '@tippyjs/react'
import { colorClass, Tcolors } from '../theme'
import { ButtonProps } from 'react-html-props'
import classnames from 'classnames'

type Placement = 'top'|'top-start'|'top-end'|'right'|'right-start'|'right-end'|'bottom'|'bottom-start'|'bottom-end'|'left'|'left-start'|'left-end'|'auto'|'auto-start'|'auto-end'

interface DropdownProps extends ButtonProps {
	buttonText: string|React.ReactNode
	color?: Tcolors
	buttonType?: string
	size?: string
	placement?: Placement
	rounded?: boolean
	block?: boolean
	ripple?: string
}

const Dropdown = forwardRef((
	{
		children,
		buttonText,
		color = 'lightBlue',
		buttonType = 'filled',
		size = 'regular',
		placement = 'bottom-start',
		rounded = false,
		block = false,
		ripple,
		className,
		...props
	}: DropdownProps,
	ref: React.ForwardedRef<any>
) => {
	const [dropdownShow, setDropdownShow] = React.useState(false)
	const rippleEffect = new Ripple()

	const filledBgColors           = colorClass('bg', color, { default: 500, yellow: 600 })
	const filledBgHoverColors      = colorClass('hover:bg', color, 700)
	const filledBgFocusColors      = colorClass('focus:bg', color, { default: 400, yellow: 500 })
	const filledBgActiveColors     = colorClass('active:bg', color, 800)
	const filledShadowColors       = colorClass('shadow-md', color)
	const filledShadowHoverColors  = colorClass('hover:shadow-lg', color)
	const outlineTextColors        = colorClass('text', color, { default: 500, yellow: 600 })
	const outlineBorderColors      = colorClass('border', color, { default: 500, yellow: 600 })
	const outlineBgHoverColors     = colorClass('hover:bg', color, 50)
	const outlineBorderHoverColors = colorClass('border:border', color, 700)
	const outlineTextHoverColors   = colorClass('hover:text', color, 700)
	const outlineBgActiveColors    = colorClass('active:bg', color, 100)

	const sharedClasses = [
		{ 'w-full': block },
		`rounded${rounded ? '-full' : ''}`,
		'flex',
		'items-center',
		'justify-center',
		'gap-1',
		'rounded-lg',
		'font-bold',
		'outline-none',
		'capitalize',
		'tracking-wider',
		'focus:outline-none',
		'transition-all',
		'duration-300',
	]

	const buttonFilled = [
		'text-white',
		filledBgColors,
		filledBgHoverColors,
		filledBgFocusColors,
		filledBgActiveColors,
		filledShadowColors,
		filledShadowHoverColors,
	]

	const buttonOutline = [
		'bg-transparent',
		'border',
		'border-solid',
		'shadow-none',
		outlineTextColors,
		outlineBorderColors,
		outlineBgHoverColors,
		outlineBorderHoverColors,
		outlineTextHoverColors,
		outlineBgHoverColors,
		outlineBgActiveColors,
	]

	const buttonLink = [
		'bg-transparent',
		outlineTextColors,
		outlineBgHoverColors,
		outlineTextHoverColors,
		outlineBgHoverColors,
		outlineBgActiveColors,
	]

	const buttonSM = [
		'py-1.5 pl-5 pr-3',
		'text-sm',
		'leading-normal',
	]
	const buttonRegular = [
		'p-2.5 pl-7 pr-5',
		'text-sm',
		'leading-normal',
	]
	const buttonLG = [
		'py-3 pl-8 pr-6',
		'text-base',
		'leading-relaxed',
	]

	let classes: Array<string> = []

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
		<div>
			<Tippy
				content={
					<div
						className='z-50 float-left p-2 mt-1 overflow-hidden text-base text-left list-none transition-all duration-500 bg-white rounded-lg shadow-lg'
						style={ { minWidth: '10rem' } }
					>
						{ children }
					</div>
				}
				animation="scale"
				trigger="click"
				offset={ [0, 0] }
				placement={ placement }
				interactive
			>
				<button
					ref={ ref }
					{ ...props }
					className={ classnames(sharedClasses, classes, className) }
					type="button"
					onClick={ () => setDropdownShow(!dropdownShow) }
					onMouseUp={ (e) => {
						ripple === 'dark' && rippleEffect.create(e, 'dark')
						ripple === 'light' && rippleEffect.create(e, 'light')
					} }
				>
					{ buttonText }
					<span className="material-icons text-lg leading-none align-middle">
						{ dropdownShow ? 'arrow_drop_up' : 'arrow_drop_down' }
					</span>
				</button>
			</Tippy>
		</div>
	)
})

export default Dropdown
