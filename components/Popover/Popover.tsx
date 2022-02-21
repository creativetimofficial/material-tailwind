import React, { forwardRef } from 'react'
import Tippy from '@tippyjs/react'
import { roundArrow } from 'tippy.js'

interface PopoverProps {
	children?: React.ReactNode
	placement?: 'left'|'right'|'top'|'bottom'
}

const Popover = forwardRef<Element, PopoverProps>((
	{ children, placement = 'top' },
	ref
) => {
	return (
		<Tippy
			content={ children }
			placement={ placement }
			ref={ ref }
			trigger="click"
			animation="shift-away"
			arrow={ roundArrow }
			className="arrow-light"
			interactive
		/>
	)
})

export default Popover
