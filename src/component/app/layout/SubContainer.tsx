import React from "react"
import {View,Dimensions} from 'react-native'
import {ReactChildren} from '../../../type/type.app'
import {Color} from '../../../asset/constant/Color'
import {ContainerStyles} from '../../../type/type.app'

const {width,height}=Dimensions.get('window')

type Props= ReactChildren & {styles: ContainerStyles}

const SubContainer = (props:Props) => {
	const {styles,children}=props
	const {
		containerWidth,containerHeight,bgColor,borderRadius,
		marginH,marginV,paddingH,paddingV,borderWidth,borderColor,
		borderBottomWidth,borderBottomColor,borderBottomRadius,
	}= styles
  	
	return (
	 	<View 
			style={[
				{
					alignSelf: 'center',
					justifyContent: 'center',
					overflow: 'hidden',
					width: containerWidth ?width * containerWidth :'auto',
					height: containerHeight ?width * containerWidth * containerHeight :'auto',
					borderWidth: borderWidth ?borderWidth :0,
					borderColor: borderColor ?borderColor :'transparent',
					borderBottomWidth: borderBottomWidth ?borderBottomWidth :borderWidth ?borderWidth :0,
					borderBottomColor: borderBottomColor ?borderBottomColor :borderColor ?borderColor :'transparent',
					borderBottomLeftRadius: borderBottomRadius ?borderBottomRadius :borderRadius ?borderRadius :0,
					borderBottomRightRadius: borderBottomRadius ?borderBottomRadius :borderRadius ?borderRadius :0,
					borderRadius: borderRadius ?borderRadius :0,
					backgroundColor: bgColor ?bgColor :Color.white,
					marginVertical: marginV ?height * marginV :0,	
					paddingVertical: paddingV ?height * paddingV :0,	
					marginHorizontal: marginH ?width * marginH :0,	
					paddingHorizontal: paddingH ?width * paddingH :0,
				},
			]}
		>
			{children}
	 	</View>
  )
};

export default SubContainer;
