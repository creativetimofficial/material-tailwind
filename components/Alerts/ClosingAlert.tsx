import React from 'react'
import { colorClass, Tcolors } from '../theme'
import { DivProps } from 'react-html-props'
import classnames from 'classnames'

interface ClosingAlertProps extends DivProps {
	color?: Tcolors
}

const ClosingAlert = ({ children, color = 'lightBlue', ...props }: ClosingAlertProps) => {
	const [showAlert, setShowAlert] = React.useState(true)

	const closeAlert = (event: React.MouseEvent<HTMLButtonElement>) => {
		let delay

		const parentClassName = event.target.parentNode.parentNode

		parentClassName.classList.add('opacity-0')

		Array.from(parentClassName.classList).map((el: any) =>
			el.includes('duration') ? (delay = el.split('-')[1]) : null
		)

		setTimeout(
			() => setShowAlert(false),
			delay ? parseInt(delay, 10) + 100 : 250
		)
	}

	const colors = colorClass('bg', color, { default: 500, yellow: 600 })

	if(!showAlert) {
		return null
	}

	return (
		<div
			{ ...props }
			className={ classnames('flex items-center gap-3 text-white p-4 pr-12 border-0 rounded-lg relative mb-4 transition-all duration-300', colors) }
		>
			{ children }
			<button
				className="right-4 top-1/3 -translate-y-1/3 focus:outline-none absolute w-6 h-6 text-2xl transform bg-transparent outline-none"
				onClick={ closeAlert }
			>
				<span className="text-4xl leading-none">&times;</span>
			</button>
		</div>
	)
}

export default ClosingAlert
