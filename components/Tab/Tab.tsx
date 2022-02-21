import React from 'react'
import { DivProps } from 'react-html-props'
import classnames from 'classnames'

const Tab = ({ children, className, ...props }: DivProps) => {
	return (
		<div
			{ ...props }
			className={ classnames('relative flex flex-col items-center justify-center bg-white rounded-lg shadow-md w-full p-4 my-8', className) }
		>
			{ children }
		</div>
	)
}

export default Tab
