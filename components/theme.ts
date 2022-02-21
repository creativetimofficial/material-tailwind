export default {}

export const colors = {
	white: 'gray',
	black: 'black',
	gray: 'gray',
	blueGray: 'blue-gray',
	brown: 'brown',
	deepOrange: 'deep-orange',
	orange: 'orange',
	amber: 'amber',
	yellow: 'yellow',
	lime: 'lime',
	lightGreen: 'light-green',
	green: 'green',
	teal: 'teal',
	cyan: 'cyan',
	lightBlue: 'light-blue',
	blue: 'blue',
	indigo: 'indigo',
	deepPurple: 'deep-purple',
	purple: 'purple',
	pink: 'pink',
	red: 'red',
}

export const colorClass = (prefix: string, color: Tcolors, weight?: string|number|Record<string,number>) => {
	let classWeight
	if(typeof weight === 'object') {
		if(weight.hasOwnProperty(color)) {
			classWeight = weight[color]
		} else if(weight.hasOwnProperty('default')) {
			classWeight = weight.default
		} else {
			// TODO: Throw invalid options error
		}
	} else {
		if(['white', 'black'].includes(color)) {
			weight = undefined
		} else {
			classWeight = weight
		}
	}

	return `${prefix}-${color}${weight ? `-${classWeight}` : ''}`
}