import React from 'react'
import { ImgProps } from 'react-html-props'
import classnames from 'classnames'

interface ImageProps extends ImgProps {
	raised?: boolean
	rounded?: boolean
}

const Image = ({ raised = false, rounded = false, className, ...props }: ImageProps) => {
	return (
		<img
			{ ...props }
			className={ classnames('max-w-full h-auto align-middle border-none', `rounded-${rounded ? 'full' : 'xl'}`, { 'shadow-lg': raised }, className) }
		/>
	)
}

export default Image
