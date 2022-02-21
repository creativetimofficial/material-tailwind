import React from 'react'
import classnames from 'classnames'
import { DivProps } from 'react-html-props'

const PopoverHeader = ({ children, className, ...props }: DivProps) => {
	return (
		<div className={ classnames('text-gray-700 font-normal px-4 pb-4', className) } { ...props }>
			{ children }
		</div>
	)
}

export default PopoverHeader
