import React from 'react'
import { colorClass, Tcolors } from '../theme'
import { H6Props } from 'react-html-props'
import classnames from 'classnames'

interface ThisH6Props extends H6Props {
	color?: Tcolors
}

const H6 = ({ children, color = 'gray', className, ...props }: ThisH6Props) => {
	const colors = colorClass('text', color, { default: 500, gray: 900, yellow: 600 })
	return (
		<h6
			{ ...props }
			className={ classnames(colors, 'text-xl font-serif font-bold leading-normal mt-0 mb-2', className) }
		>
			{ children }
		</h6>
	)
}

export default H6
