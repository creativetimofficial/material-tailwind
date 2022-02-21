import React from 'react'
import { colorClass, Tcolors } from '../theme'
import { H5Props } from 'react-html-props'
import classnames from 'classnames'

interface ThisH5Props extends H5Props {
	color?: Tcolors
}

const H5 = ({ children, color = 'gray', className, ...props }: ThisH5Props) => {
	const colors = colorClass('text', color, { default: 500, gray: 900, yellow: 600 })
	return (
		<h5
			{ ...props }
			className={ classnames(colors, 'text-2xl font-serif font-bold leading-normal mt-0 mb-2', className) }
		>
			{ children }
		</h5>
	)
}

export default H5
