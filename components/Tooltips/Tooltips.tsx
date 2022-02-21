import React, { forwardRef } from 'react'
import Tippy from '@tippyjs/react'
import { roundArrow } from 'tippy.js'

interface TooltopProps {
	children?: React.ReactNode
	placement?: 'left'|'right'|'top'|'bottom'
}

const Tooltip = forwardRef<Element, TooltopProps>((
	{ children, placement = 'top' },
	ref
) => {
	return (
		<Tippy
			content={ children }
			placement={ placement }
			ref={ ref }
			animation="shift-away"
			arrow={ roundArrow }
			className="arrow-dark"
			interactive
		/>
	)
})

export default Tooltip
