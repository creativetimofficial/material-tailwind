import React, { forwardRef } from 'react'
import { colorClass, Tcolors } from '../theme'
import { InputProps } from 'react-html-props'
import classnames from 'classnames'

interface CheckboxProps extends InputProps {
	color?: Tcolors,
	text: string,
}

const Checkbox = forwardRef((
	{ color = 'lightBlue', text, id, ...props }: CheckboxProps,
	ref: React.ForwardedRef<any>
) => {
	const colors = colorClass('mt-checkbox', color, { default: 500, yellow: 600 })

	return (
		<div className="flex items-center">
			<input
				ref={ ref }
				{ ...props }
				id={ id }
				type="checkbox"
				className={ classnames('mt-checkbox hidden overflow-hidden', colors) }
			/>
			<label
				htmlFor={ id }
				className="flex items-center text-gray-400 transition-all duration-300 cursor-pointer select-none"
			>
				<span className="relative inline-block w-5 h-5 mr-2 transition-all duration-300 border border-gray-500 rounded"></span>
				{ text }
			</label>
		</div>
	)
})

export default Checkbox
