import React from 'react'
import { colorClass, Tcolors } from '../theme'
import { ULProps } from 'react-html-props'
import classnames from 'classnames'

interface TabListProps extends ULProps {
	color?: Tcolors
}

const TabList = ({ children, color = 'lightBlue', className, ...props }: TabListProps) => {
	const colors = colorClass('bg', color, { default: 500, yellow: 600 })
	const shadowColors = colorClass('shadow-lg', color)

	return (
		<ul
			{ ...props }
			className={ classnames(
				' w-full rounded-lg p-4 mx-5 flex justify-start -mt-12 mb-6 list-none z-10',
				colors,
				shadowColors,
				className
			) }
			role="tablist"
		>
			{ children }
		</ul>
	)
}

export default TabList
