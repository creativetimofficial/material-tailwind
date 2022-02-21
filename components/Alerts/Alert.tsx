import React from 'react'
import { colorClass, Tcolors } from '../theme'
import { DivProps } from 'react-html-props'
import classnames from 'classnames'

interface AlertProps extends DivProps {
	color?: Tcolors
}

const Alert = ({ children, color = 'lightBlue', ...props }: AlertProps) => {
	const colors = colorClass('bg', color, { default: 500, yellow: 600 })

	return (
		<>
			<div
				{ ...props }
				className={ classnames('flex items-center gap-3 text-white p-4 pr-12 border-0 rounded-lg relative mb-4, transition-all duration-300', colors ) }
			>
				{ children }
			</div>
		</>
	)
}

export default Alert
