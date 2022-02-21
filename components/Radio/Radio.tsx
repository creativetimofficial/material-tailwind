import React, { forwardRef } from 'react'
import { colorClass, Tcolors } from '../theme'
import { InputProps } from 'react-html-props'
import classnames from 'classnames'

interface RadioProps extends InputProps {
	color?: Tcolors
	text?: string
}

const Radio = forwardRef<HTMLInputElement, RadioProps>((
	{ color = 'lightBlue', text, id, ...props },
	ref
) => {
	const colors = colorClass('mt-radio', color, { default: 500, yellow: 600 })

	return (
		<div className="flex items-center">
			<input
				ref={ ref }
				{ ...props }
				id={ id }
				type="radio"
				className={ classnames('mt-radio hidden overflow-hidden', colors) }
			/>
			<label
				htmlFor={ id }
				className="flex items-center text-gray-400 transition-all duration-300 cursor-pointer select-none"
			>
				<span className="relative inline-block w-4 h-4 mr-2 transition-all duration-300 border border-gray-500 rounded-full"></span>
				{ text }
			</label>
		</div>
	)
})

export default Radio
