import React from 'react'
import { KeyboardTypeOptions, NativeSyntheticEvent,TextInputChangeEventData } from 'react-native'
import { ColorValues } from '../../../asset/constant/Color'
import { FontStyling } from '../../../type/type.app'

export type ConvertOptional<T,E>={
	[K in keyof T]?: K extends E
		? never
		: T[K]
}

export type ReactChildren= {
	children: React.ReactElement
}

export type InputChangeEvent= NativeSyntheticEvent<TextInputChangeEventData> // React.ChangeEvent<HTMLInputElement> => reactjs

export type OnChangeBase<T>= {
	id: string
	onChange: (input:T) => void
	type: KeyboardTypeOptions
}

export type InputHandle={
	getValue: () => string
	onFocus: () => void
	resetValue: () => void
}

export type InputProps= {
	type: KeyboardTypeOptions
	placeholder: string
	onSubmit?: () => void
	x:	boolean
	w:	number
	h:	number
	l: number
	tb:	boolean
	b:	boolean
	multi: boolean
	font?: FontStyling
	bgColor: ColorValues
}