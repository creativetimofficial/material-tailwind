import React from 'react'

const Pagination: React.FC = ({ children }) => {
	return (
		<div className="py-2">
			<div className="block">
				<ul className="flex pl-0 list-none rounded">{ children }</ul>
			</div>
		</div>
	)
}

export default Pagination
