import React from 'react'
import Ripple from '../../lib/material-ripple-effects'
import { AProps } from 'react-html-props'
import classnames from 'classnames'

interface TabItemProps extends AProps {
	active?: boolean
	ripple?: 'light'|'dark'
}

const TabItem = ({ children, active = false, ripple, className, ...props }: TabItemProps) => {
	const rippleEffect = new Ripple()

	return (
		<li className="text-center">
			<a
				{ ...props }
				className={ classnames(
					'flex items-center justify-center gap-1 rounded-lg text-sm font-medium py-4 px-6 leading-normal text-white transition-all duration-300',
					{ 'bg-white bg-opacity-20': active },
					className
				) }
				role="tablist"
				onMouseUp={ (e) => {
					!!ripple && rippleEffect.create(e, ripple)
				} }
			>
				{ children }
			</a>
		</li>
	)
}

export default TabItem
