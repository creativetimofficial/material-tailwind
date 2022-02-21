import React from 'react'
import Ripple from '../../lib/material-ripple-effects'
import { AProps } from 'react-html-props'
import classnames from 'classnames'

interface NavLink extends AProps {
	active?: 'light'|'dark'
	ripple?: 'light'|'dark'
	as?: string|React.ReactNode
}

const NavLink = ({ children, active, ripple, ...props }: NavLink) => {
	const rippleEffect = new Ripple()

	return (
		<a
			{ ...props }
			className={ classnames(
				'px-5 py-4 flex gap-1 items-center text-xs uppercase font-medium leading text-white rounded-lg',
				{ 
					'bg-black bg-opacity-20': active === 'dark',
					'bg-white bg-opacity-20': active === 'light'
				}
			) }
			onMouseUp={ (e) => rippleEffect.create(e, ripple) }
		>
			{ children }
		</a>
	)
}

export default NavLink
