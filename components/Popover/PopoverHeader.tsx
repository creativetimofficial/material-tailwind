import React from 'react'
import { DivProps } from 'react-html-props'

const PopoverHeader = ({ children, className, ...props }: DivProps) => {
	return (
		<div
			{ ...props }
			className={ `text-gray-900 p-4 pb-2 uppercase font-bold ${className}` }
		>
			{ children }
		</div>
	)
}

export default PopoverHeader
