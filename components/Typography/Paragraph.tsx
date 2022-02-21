import React from 'react'
import { colorClass, Tcolors } from '../theme'
import { PProps } from 'react-html-props'
import classnames from 'classnames'

interface ParagraphProps extends PProps {
	color?: Tcolors
}

const Paragraph = ({ children, color = 'blueGray', className, ...props }: ParagraphProps) => {
	const colors = colorClass('text-gray', color, 700)

	return (
		<p
			{ ...props }
			className={ classnames(colors, 'text-base font-light leading-relaxed mt-0 mb-4', className) }
		>
			{ children }
		</p>
	)
}

export default Paragraph
