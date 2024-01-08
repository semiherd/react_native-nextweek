import { ImageSource } from '../app/image/type.image'

export type UpdateDataType={
	id: string
	message: string
	heading: string
	icon: ImageSource
}

export type UpdateLayoutProps={
	action: React.JSX.Element
	content: React.JSX.Element
}