import { ButtonProps } from 'react-html-props'
import { colors } from './theme'

export { ButtonProps }

declare module './theme' {
	export type Tcolors = keyof typeof colors
}