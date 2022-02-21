import React from 'react'
import { colorClass, Tcolors } from '../theme'
import { H1Props } from 'react-html-props'
import classnames from 'classnames'

interface ThisH1Props extends H1Props {
	color?: Tcolors
}

const H1 = ({ children, color = 'gray', className, ...props }: ThisH1Props) => {
	const colors = colorClass('text', color, { default: 500, gray: 900, yellow: 600 })

	return (
		<h1
			{ ...props }
			className={ classnames(colors, 'text-6xl font-serif font-bold leading-normal mt-0 mb-2', className) }
		>
			{ children }
		</h1>
	)
}

export default H1
