import React from 'react'
import { colorClass, Tcolors } from '../theme'
import { DivProps } from 'react-html-props'
import classnames from 'classnames'

interface CardStatusFooterProps extends DivProps {
	color?: Tcolors
	amount: string
	date: string
}

const CardStatusFooter = ({ children, color = 'lightBlue', amount, date, className }: CardStatusFooterProps) => {
	const textColors = colorClass('text', color, { default: 500, yellow: 600 })

	return (
		<div
			className={ classnames('text-sm text-gray-700 pt-4 flex items-center', className) }
		>
			{ children }
			<span className={ classnames('ml-1 mr-2', textColors) }>{ amount }</span>
			<span className="whitespace-nowrap font-light">{ date }</span>
		</div>
	)
}

export default CardStatusFooter
