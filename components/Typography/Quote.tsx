import React from 'react'
import { colorClass, Tcolors } from '../theme'
import { DivProps } from 'react-html-props'
import classnames from 'classnames'

interface QuoteProps extends DivProps {
	color?: Tcolors
	footer: string
	cite: string
}

const Quote = ({ children, color = 'blueGray', footer, cite, className, ...props }: QuoteProps) => {
	const textColors = colorClass('text', color, { default: 700, yellow: 600 })
	const citeColors = colorClass('text', color,800)

	return (
		<div { ...props } className={ classnames(className, 'mb-2') }>
			<p className={ `${textColors} text-base font-light leading-relaxed mt-0 mb-2` }>
				{ children }
			</p>
			<footer className={ `block ${citeColors}` }>
				- { footer } <cite>{ cite }</cite>
			</footer>
		</div>
	)
}

export default Quote
