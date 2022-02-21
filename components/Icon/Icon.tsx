import React from 'react'
import MaterialIcon from './MaterialIcon'
import FontAwesomeIcon from './FontAwesomeIcon'
import { colorClass, Tcolors } from '../theme'
import { DivProps } from 'react-html-props'
import classnames from 'classnames'

export interface IconProps extends DivProps{
	name: string
	family?: 'material-icons'|'font-awesome'
	color?: Tcolors
	size?: keyof typeof sizes
}

const sizes = {
	xs: 'text-xs',
	sm: 'text-sm',
	base: 'text-base',
	lg: 'text-lg',
	xl: 'text-xl',
	'2xl': 'text-2xl',
	'3xl': 'text-3xl',
	'4xl': 'text-4xl',
	'5xl': 'text-5xl',
	'6xl': 'text-6xl',
	'7xl': 'text-7xl',
	'8xl': 'text-8xl',
	'9xl': 'text-9xl',
}

const Icon = ({ name, family = 'material-icons', color, size = 'base', className, ...props }: IconProps) => {
	const IconComponent = family === 'material-icons' ? MaterialIcon : FontAwesomeIcon

	const textColor = color ? colorClass('text', color, { default: 500, yellow: 600 }) : color

	return <IconComponent name={ name } className={ classnames({ [`${textColor}`]: !!color }) } { ...props } />
}

export default Icon
