import React from 'react'
import Ripple from '../../lib/material-ripple-effects'
import { LIProps } from 'react-html-props'
import classnames from 'classnames'

interface NavItem extends LIProps{
	children: React.ReactNode
	active: 'light'|'dark'
	ripple: 'light'|'dark'
}

const NavItem = ({ children, active, ripple, className, ...props }: NavItem) => {
	const rippleEffect = new Ripple()

	return (
		<li
			{ ...props }
			className={ classnames(
				'px-5 py-4 flex gap-1 items-center text-xs uppercase font-medium leading text-white rounded-lg',
				{
					'bg-black bg-opacity-20': active === 'dark',
					'bg-white bg-opacity-20': active === 'light'
				},
				className
			) }
			onMouseUp={ e => ripple === 'dark' && rippleEffect.create(e, ripple) }
		>
			{ children }
		</li>
	)
}

export default NavItem
