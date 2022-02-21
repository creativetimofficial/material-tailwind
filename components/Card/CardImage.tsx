import React from 'react'
import { ImgProps } from 'react-html-props'
import classnames from 'classnames'

const CardImage = ({ src, className, ...props }: ImgProps) => {
	return (
		<img
			src={ src }
			className={ classnames('w-full rounded-lg -mt-9 shadow-lg', className) }
			{ ...props }
		/>
	)
}

export default CardImage
