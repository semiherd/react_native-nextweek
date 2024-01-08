import React from "react"
import { View } from "react-native"
import { ImageSource, ImageCss } from "../image/type.image"
import { Color, ColorValues } from "../../../asset/constant/Color"
import AvatarDef from "../image/AvatarDef"
import ImageItem from "../image/ImageItem"

const NavigationIcon = (
	{image,styling,useBorder}:
	{image: ImageSource,styling:ImageCss,useBorder:{color:ColorValues,radius:number,width:number}}
) => {	
	
	const css:ImageCss={
		tintColor: styling.tintColor ?styling.tintColor :Color.white,
		width: styling.width ?styling.width :20,
		height: styling.width ?styling.height :20,
		borderWidth: styling.borderWidth ?styling.borderWidth :0,
		borderColor: styling.borderColor ?styling.borderColor :Color.transparent,
		borderRadius: styling.borderRadius ?styling.borderRadius :0,
		backgroundColor: styling.backgroundColor ?styling.backgroundColor :Color.transparent,
	}

	return (
		<View style={{ alignSelf:'center',borderWidth: useBorder.width,borderColor:useBorder.color,borderRadius: useBorder.radius, padding:'10%'}}>
			<ImageItem 
				styling= {css}
				width={styling.width}
				height={styling.height}
				image= {image}
				useFallback= {false}
				errorComponent={<AvatarDef />}
				loadingComponent={<AvatarDef />}
			/>
		</View>
	)
	
}
export default NavigationIcon
