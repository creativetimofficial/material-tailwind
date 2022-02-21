import React from 'react'
import { colorClass, Tcolors } from '../theme'
import { DivProps } from 'react-html-props'
import classnames from 'classnames'

interface ClosingLabelProps extends DivProps {
	color: Tcolors
}

const ClosingLabel = ({ children, color, className }: ClosingLabelProps) => {
	const [showLabel, setShowLabel] = React.useState(true)

	function closeLabel(event: React.MouseEvent<HTMLButtonElement>) {
		let delay

		const parentClassName: HTMLElement = event.target.parentNode

		parentClassName.classList.add('opacity-0')

		Array.from(parentClassName.classList).map((el) =>
			el.includes('duration') ? (delay = el.split('-')[1]) : null
		)

		setTimeout(
			() => setShowLabel(false),
			delay ? parseInt(delay, 10) + 100 : 250
		)
	}

	const divBgColors = colorClass('bg', color, 100)
	const textColors = colorClass('text', color, 700)
	const spanBgColors = colorClass('bg', color, 900)

	if(!showLabel) return <></>

	return (
		<div className={ classnames('max-w-max flex items-center justify-between py-1 pl-3 pr-1 rounded-full last:mr-0 mr-1 transition-all duration-300', divBgColors, className) }>
			<span className={ classnames('text-xs font-semibold uppercase mr-2', textColors) }>
				{ children }
			</span>
			<span
				className={ classnames('text-white text-sm leading-none rounded-full w-4 h-4 cursor-pointer grid place-items-center p-0', spanBgColors) }
				onClick={ closeLabel }
			>
        &times;
			</span>
		</div>
	)
}

export default ClosingLabel
