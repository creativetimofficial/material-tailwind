import React from 'react'
import { ULProps } from 'react-html-props'
import classnames from 'classnames'

interface NavProps extends ULProps {
	children: React.ReactNode
	leftSide: boolean
	className: string
}

const Nav = ({ children, leftSide = false, className, ...props }: NavProps) => {
	return (
		<ul
			className={ classnames(
				`flex lg:items-center flex-col lg:flex-row list-none ${leftSide ? 'mr-auto' : 'ml-auto'}`,
				className
			) }
			{ ...props }
		>
			{ children }
		</ul>
	)
}

export default Nav
