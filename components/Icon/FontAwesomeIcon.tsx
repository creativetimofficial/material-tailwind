import React from 'react'
import classnames from 'classnames'
import { DivProps } from 'react-html-props'

interface FontAwesomeIconProps extends DivProps {
	name: string
	className: string
}

const FontAwesomeIcon = ({ name, className, ...props }: FontAwesomeIconProps) => {
	return (
		<i
			{ ...props }
			className={ classnames(name, className) }
		/>
	)
}

export default FontAwesomeIcon
