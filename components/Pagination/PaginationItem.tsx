import React from 'react'
import Ripple from '../../lib/material-ripple-effects'
import { colorClass, Tcolors } from '../theme'
import { AProps } from 'react-html-props'
import classnames from 'classnames'

interface PaginationItemProps extends AProps {
	color?: Tcolors
	button?: boolean
	ripple: 'light'|'dark'
}

const PaginationItem = ({ children, color, button, ripple, className, ...props }: PaginationItemProps) =>{
	const rippleEffect = new Ripple()

	return (
		<li className="place-items-center grid">
			<a
				{ ...props }
				className={ classnames(
					'text-sm leading-none flex h-8 mx-1 p-0 items-center justify-center  transition-all duration-300 ',
					(
						color
							? colorClass('bg', color, { default: 500, yellow: 600 })
							: 'bg-transparent text-gray-700 hover:bg-gray-500 hover:bg-opacity-20 focus:bg-gray-500 focus:bg-opacity-20 active:bg-gray-500 active:bg-opacity-40'
					),
					(
						button
							? 'tracking-wider rounded-lg w-14'
							: 'rounded-full w-8'
					),
					className
				) }
				onMouseUp={ e => rippleEffect.create(e, ripple) }
			>
				{ children }
			</a>
		</li>
	)
}

export default PaginationItem

