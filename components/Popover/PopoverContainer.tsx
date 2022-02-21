import React from 'react'
import { DivProps } from 'react-html-props'

const PopoverContainer = ({ children, className, ...props }: DivProps) => {
	return (
		<div
			{ ...props }
			className={ `bg-white border-0 block z-50 font-normal leading-normal text-sm max-w-xs text-left no-underline break-words rounded-lg shadow-xl ${className}` }
		>
			{ children }
		</div>
	)
}

export default PopoverContainer
