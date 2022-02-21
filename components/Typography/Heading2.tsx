import React from 'react'
import { colorClass, Tcolors } from '../theme'
import { H2Props } from 'react-html-props'
import classnames from 'classnames'

interface ThisH2Props extends H2Props {
	color?: Tcolors
}

const H2 = ({ children, color = 'gray', className, ...props }: ThisH2Props) => {
	const colors = colorClass('text', color, { default: 500, gray: 900, yellow: 600 })

	return (
		<h2
			{ ...props }
			className={ classnames(colors, 'text-5xl font-serif font-bold leading-normal mt-0 mb-2', className) }
		>
			{ children }
		</h2>
	)
}

export default H2
