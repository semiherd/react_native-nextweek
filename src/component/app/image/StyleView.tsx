import React from "react"
import { View,ViewStyle,Dimensions } from 'react-native'
import { Color } from '../../../asset/constant/Color'
import { ImageCss } from './type.image'

type Position={
	position?: 'relative' | 'absolute'
	top?: number
	left?: number
	right?: number
	bottom?: number
}
type PropType={
	styling: ImageCss & Position
	children: React.ReactElement
}
const {width,height}= Dimensions.get('window')

const StyledView = ({styling,children}:PropType) => {
	
	const containerStyle:ViewStyle={
		position: styling.position ?styling.position : 'relative',
		top: styling.top ?height*styling.top :0,
		bottom: styling.bottom ?height*styling.bottom :0,
		left: styling.left ?width*styling.left :0,
		right: styling.right ?width*styling.right :0,
		width: styling.width ?styling.width*width : 25,
		height: styling.height ?styling.height*height: 25,
		borderRadius: styling.borderRadius ?styling.borderRadius :30,
		borderColor: styling.borderColor ?styling.borderColor :Color.blue,
		borderWidth: styling.borderWidth ? styling.borderWidth :0,
		backgroundColor: styling.backgroundColor ?styling.backgroundColor :Color.white,
		alignSelf: 'center',
		justifyContent: 'center',
		marginHorizontal: '1%',
	}

	return (
			<View style={[{zIndex:1},containerStyle]}>
				{children}
			</View>
	)
};

export default StyledView;
