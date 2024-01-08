import React, { useEffect, useState } from "react"
import { View, Image } from 'react-native'
import { ImageCss, ImageProps, TypeImageState } from './type.image'
import ImageLoading from './ImageLoading'
import ImageError from './ImageError'

const ImageItem= (props:ImageProps) => {
	const [imageState,setImageState]= useState<TypeImageState>('INIT')
	
	useEffect(() => {
		setImageState(props.image? 'COMPLETE':'ERROR')
	},[props.image])
	
	if(imageState==='ERROR' && props.useFallback){
		return (
			<>
			{imageState==="ERROR" && props.useFallback
				? props.errorComponent
					? <View>{props.errorComponent}</View>
					: <ImageError width={props.width} height={props.width} />
				: null
			}
			</>
		)
	}
	if(imageState==="LOADING"){
		return (
			<>
			{imageState==="LOADING"
				? props.loadingComponent
					? <View>{props.loadingComponent}</View>
					: <ImageLoading width={props.width} height={props.width} />
				: null
			}
			</>
		)
	}
	const defStyles={
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf:'center', 
		width: props.width,
		height: props.width,
	}
	const imageStyles= {...defStyles,...props.styling}
	
	return (
	 	<Image 
			style={[imageStyles as ImageCss]}
			source= {props.image? props.image:''}
			onLoad={() => setImageState('COMPLETE')}
			onError={() => setImageState('ERROR')}
		/>
   )
}

export default ImageItem


