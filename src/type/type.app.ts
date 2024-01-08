import React,{ MutableRefObject } from "react"
import { ColorValues } from '../asset/constant/Color'

export type WeekDays= 'Monday'| 'Tuesday' | 'Wednesday' | 'Thursday'| 'Friday' | 'Saturday' | 'Sunday'

export type IdParam<T,K extends keyof T>={
	_id: T[K]
}

export type OnClickFn<T>= (param:T) => void

export type ObjType= {
	[key:string]: number | string | boolean | object
}

export type ReactChildren= {
	children: React.ReactNode | React.ReactElement
}
export type NarrowIncluding<Key,U>= Key extends U? Key : never

export type SubType<T,U>={
	[key in keyof T as NarrowIncluding<key,U>]: T[key]
}

export type RemoveKey<T,U extends keyof T>={
	[key in keyof T as NarrowIncluding<key,U>]: key extends keyof T
		? T[key]
		: never
}

export type Only<T, U> = 
	{[P in keyof T]: T[P]} &
	Omit<{[P in keyof U]?: never}, keyof T>

export type Either<T, U> = Only<T, U> | Only<U, T>
export type Remove<T,U>= T extends U? never: T
export type Ext<T,U>= T extends U? T: never
export type ObjectVal<T>= T[keyof T]
export type ObjectKey<T>= keyof T

export type TimeString= string

export type TimeRange= {
	start: TimeString
	end: TimeString
}
export type FontStyling= {
	overFlow?: 'hidden' | 'visible' | 'scroll' | 'auto' | 'clip'
	fontFamily?: 'K2D' | 'Sk-Modernist' | 'Mulish' | 'Lato' | 'Poppins' | 'Lato-Black' | 'Poppins-Black' |'Lato-Bold' | 'Poppins-Bold'
	fontSize?: number
	fontWeight?: 'bold' | '400' | '500' | '600' | '700' | '800' | '900'
	color?: ColorValues | undefined
	backgroundColor?: ColorValues | undefined
	lineHeight?: number,
	borderRadius?: number
	textAlign?: "center" | "auto" | "left" | "right" | "justify"
}

export type AlignOptions= 'center' | 'space-around' | 'space-between' | 'flex-end' | 'flex-start'
export type AlignSelfOptions= 'center' | 'flex-end' | 'flex-start'

export type CardCss= ContainerStyles

export type ContainerStyles={
		containerWidth: number
		containerHeight?: number
		bgColor?: string
		borderRadius?: number
		borderWidth?: number
		borderColor?: string
		marginH?:number
		paddingH?: number
		marginV?: number
		paddingV?: number
		borderBottomWidth?:number
		borderBottomColor?:string
		borderBottomRadius?:number
}

export type HeaderProps={
	title: React.ReactElement | null
	text: React.ReactElement | null
	icon: React.ReactElement | null
	backbutton?:boolean
}

export type TitleItemProps={
	titletext: string
	fontStyling?: FontStyling
}

export interface TitleWithButtonProps<T> extends UserButtonType<T>,TitleItemProps{}

export type UserButtonType<T extends object>={
	buttontext: string
	onClickFn: (item:T) => void
	onClickParam: T
	useBorder: boolean
	fontStyles: FontStyling
	borderStyles?: BorderStyle
	containerStyles?: ContainerStyles
	width?: number
}

export type MarginPaddingStyling={
	marginV?: number
	marginH?: number
	paddingV?: number
	paddingH?: number
}

export type BorderStyle={
	borderRadius?: number
	borderColor?: string
	borderWidth?: number
	borderBottomWidth?: number
	borderBottomColor?: string
}

export type UseRefObj<T>= {
	current: MutableRefObject<T>
}

export type NestedKey<Obj extends object>= {
	[K in keyof Obj & (string|number)] : Obj[K] extends object
		? `${K}` | `${K}.${NestedKey<Obj[K]>}`
		: `${K}`
}[keyof Obj & (string|number)] 

export type NestedVal<Obj extends object>= {
	[K in keyof Obj] : Obj[K] extends object
		? NestedVal<Obj[K]>
		: Obj[K]
}[keyof Obj]