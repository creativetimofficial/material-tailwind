import React from 'react'
import { colorClass, Tcolors } from '../theme'
import { DivProps } from 'react-html-props'
import classnames from 'classnames'

interface SmallProps extends DivProps {
	color?: Tcolors
}

const Small = ({ children, color = 'blueGray', className, ...props }: SmallProps) => {
	const colors = colorClass('text', color, { default: 700, yellow: 600 })

	return (
		<small
			{ ...props }
			className={ classnames(colors, 'font-normal leading-normal mt-0 mb-4', className) }
		>
			{ children }
		</small>
	)
}

export default Small
