import React from 'react'
import { colorClass, Tcolors } from '../theme'
import { PProps } from 'react-html-props'
import classnames from 'classnames'

interface LeadText extends PProps {
	color: Tcolors
}

const LeadText = ({ children, color = 'blueGray', className, ...props }: LeadText) => {
	const colors = colorClass('text', color, {
		default: 700,
		gray: 200,
		yellow: 600
	})

	return (
		<p
			{ ...props }
			className={ classnames(colors, 'text-lg font-light leading-relaxed mt-6 mb-4', className) }
		>
			{ children }
		</p>
	)
}

export default LeadText
