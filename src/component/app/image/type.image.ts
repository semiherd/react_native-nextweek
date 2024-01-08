import React from "react"
import { ImageSourcePropType } from "react-native"
import { BorderStyle, AlignOptions, AlignSelfOptions, ObjectVal} from '../../../type/type.app'
import { SubType } from '../../../type/type.app'
import { User } from '../../../context/user/type.user'
import { ColorValues } from "../../../asset/constant/Color"

const ImageState={
	a: 'INIT',
	b: 'LOADING',
	c: 'COMPLETE',
	d: 'ERROR'
} as const 

export type ImageSource= ImageSourcePropType | HTMLImageElement | null

export type ImageSize={
	width: number
	height: number
}

export type Color={
	backgroundColor?: ColorValues
	tintColor?: ColorValues
}

export type AlignStyle={
	alignSelf?: AlignSelfOptions, 
	justifyContent?: AlignOptions
}

export interface ImageCss extends Color,ImageSize,BorderStyle,AlignStyle{}

export interface ImageProps extends ImageSize {
	styling?: ImageCss
	image: ImageSource
	useFallback?: boolean
	errorComponent?: React.ReactNode
	loadingComponent?: React.ReactNode
} 

export type ErrorProps= ImageSize
export type LoadingProps= ImageSize
export type TypeImageState= ObjectVal<typeof ImageState>
export type UserAvatar= SubType<User,'_id'|'name'|'image'>

export type AvatarItem= {
	data: UserAvatar
} & {styling: ImageCss}