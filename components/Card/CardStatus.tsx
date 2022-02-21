import React from 'react'
import { DivProps } from 'react-html-props'
import classnames from 'classnames'

interface CardStatusProps extends DivProps {
	amount: string
}

const CardStatus = ({ title, amount, className, ...props }: CardStatusProps) => {
	return (
		<div
			className={ classnames('w-full pl-4 max-w-full flex-grow flex-1 mb-2 text-right', className) }
			{ ...props }
		>
			<h5 className="mb-1 text-base font-light tracking-wide text-gray-500">
				{ title }
			</h5>
			<span className="text-3xl text-gray-900">{ amount }</span>
		</div>
	)
}

export default CardStatus
