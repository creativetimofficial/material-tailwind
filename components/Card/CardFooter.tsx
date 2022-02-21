import React from 'react'
import { DivProps } from 'react-html-props'

const CardFooter = ({ children, className, ...props }: DivProps) => {
	return <div className={ `p-4 ${className}` } { ...props }>{ children }</div>
}

export default CardFooter
