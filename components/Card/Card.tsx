import React from 'react'
import { DivProps } from 'react-html-props'
import classnames from 'classnames'

const Card = ({ children, className, ...props }: DivProps) => {
	return (
		<div
			className={ classnames('w-full bg-white rounded-xl overflow-hdden shadow-md p-4', className) }
			{ ...props }
		>
			{ children }
		</div>
	)
}

export default Card
