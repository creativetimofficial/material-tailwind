import React from 'react'
import { DivProps } from 'react-html-props'
import classnames from 'classnames'

interface MaterialIconProps extends DivProps {
	name: string
	className: string
}

const MaterialIcon = ({ name, className, ...props }: MaterialIconProps) => {
	return (
		<span
			{ ...props }
			className={ classnames('material-icons leading-none', className) }
		>
			{ name }
		</span>
	)
}

export default MaterialIcon
