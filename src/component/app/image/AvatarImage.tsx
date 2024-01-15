import React from 'react'
import {AvatarItem, ImageCss} from './type.image'
import ImageItem from './ImageItem'
import AvatarDef from './AvatarDef'

const AvatarImage= (props: AvatarItem):React.ReactElement => {
	
	const css={
		width: props.styling.width,
		height: props.styling.height || props.styling.width,
		borderWidth: props.styling.borderWidth || 0,
		borderColor: props.styling.borderColor || 'transparent',
		alignSelf: props.styling.alignSelf || 'center', 
		borderRadius: props.styling.borderRadius || 50
	} as ImageCss

	return <ImageItem 
		styling= {css}
		width={props.styling.width}
		height={props.styling.width}
		image= {props.data.image || null}
		useFallback= {false}
		errorComponent={<AvatarDef />}
		loadingComponent={<AvatarDef />}
	/>
}
export default AvatarImage