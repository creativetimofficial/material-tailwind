import React from 'react'
import { DivProps } from 'react-html-props'
import classnames from 'classnames'

const CardBody = ({ children, className, ...props }: DivProps) => {
	return <div className={ classnames('p-4', className) } { ...props }>{ children }</div>
}

export default CardBody
