import React from 'react'
import { colorClass, Tcolors } from '../theme'
import classnames from 'classnames'

interface ProgressProps {
	color?: Tcolors
	value: string
	percentage?: boolean
}

const Progress = ({ color = 'lightBlue', value, percentage = false }: ProgressProps) => {
	const wrapperBgColors = colorClass('bg', color, 200)
	const bgColors = colorClass('bg', color, { default: 500, yellow: 600 })

	return (
		<div
			className={ classnames(
				'overflow-hidden flex rounded',
				percentage ? 'h-6' : 'h-2',
				wrapperBgColors
			) }>
			<div
				style={ { width: `${value}%` } }
				className={ classnames('flex justify-center items-center rounded text-xs font-medium text-white', bgColors) }
			>
				{ percentage && `${value}% Completed` }
			</div>
		</div>
	)
}

export default Progress
