import React from 'react'
import { DivProps } from 'react-html-props'
import classnames from 'classnames'

interface ModalHeader extends DivProps{
	toggler: () => void
}

const ModalHeader = ({ children, toggler, className, ...props }: ModalHeader) => {
	return (
		<div className={ classnames("flex items-center justify-between mb-6", className) } { ...props }>
			<h5 className="mt-0 mb-0 text-2xl font-bold text-gray-900">{ children }</h5>
			<button
				className="top-2 right-4 focus:outline-none absolute p-1 text-3xl leading-none text-gray-900 bg-transparent outline-none"
				onClick={ toggler }
			>
				<span className="block text-3xl text-gray-900">&times;</span>
			</button>
		</div>
	)
}

export default ModalHeader
