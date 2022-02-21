import React from 'react'
import { colorClass, Tcolors } from '../theme'
import { DivProps } from 'react-html-props'
import classnames from 'classnames'

interface CardHeaderProps extends DivProps {
	size?: string
	color?: Tcolors
	contentPosition?: string
	iconOnly?: boolean
}

const positions: Record<string, string> = {
	left: 'justify-start',
	right: 'justify-end',
	center: 'justify-center',
}

const CardHeader = ({ children, color = 'lightBlue', size = 'regular', contentPosition = 'center', iconOnly = false, className, ...props }: CardHeaderProps) => {
	const fromWeights = {
		default: 500,
		yellow: 600
	}

	const toWeights = {
		default: 700,
		yellow: 800
	}

	const fromColors = colorClass('from', color, fromWeights)
	const toColors = colorClass('to', color, toWeights)
	const shadowColors = colorClass('shadow-lg', color)
	let headerSize: Array<string> = []

	const smallHeader: Array<string> = [
		iconOnly ? 'w-20' : 'w-full',
		'h-20',
		'py-4',
		iconOnly ? 'px-4' : 'px-8',
		positions[contentPosition],
	]

	const regularHeader: Array<string> = [
		iconOnly ? 'w-24' : 'w-full',
		'h-24',
		'py-4',
		iconOnly ? 'px-4' : 'px-8',
		positions[contentPosition],
	]

	const largeHeader: Array<string> = [
		iconOnly ? 'w-28' : 'w-full',
		'h-28',
		'py-4',
		iconOnly ? 'px-4' : 'px-8',
		positions[contentPosition],
	]

	if (size === 'sm') {
		headerSize.push(...smallHeader)
	} else if (size === 'lg') {
		headerSize.push(...largeHeader)
	} else {
		headerSize.push(...regularHeader)
	}

	return (
		<div
			className={ classnames('bg-gradient-to-tr -mt-10 mb-4 rounded-xl text-white grid items-center',headerSize, shadowColors, fromColors, toColors, className) }
			{ ...props }
		>
			{ children }
		</div>
	)
}

export default CardHeader
