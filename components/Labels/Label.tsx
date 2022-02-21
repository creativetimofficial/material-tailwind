import React from 'react'
import { colorClass, Tcolors } from '../theme'
import { DivProps } from 'react-html-props'
import classnames from 'classnames'

interface LabelProps extends DivProps {
	color: Tcolors
}

const Label = ({ children, color, className, ...props }: LabelProps) => {
	const bgColors = colorClass('bg', color, 100)
	const textColors = colorClass('text', color, 700)

	return (
		<>
			<div
				className={ classnames('max-w-max flex items-center justify-between py-1 px-3 rounded-full last:mr-0 mr-1 transition-all duration-300', bgColors, className) }
				{ ...props }
			>
				<span
					className={ classnames('text-xs font-semibold uppercase', textColors) }
				>
					{ children }
				</span>
			</div>
		</>
	)
}

export default Label
