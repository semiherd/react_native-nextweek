import React from 'react'
import { View } from 'react-native'
import { TextWithIconProps } from '../../../type/type.component'

const IconText = (props:TextWithIconProps) => {
	
	return (
		<View 
			style={{
				display: 'flex',
				flexDirection: props.direction,
				justifyContent: props.align,
			}}
		>
			{props.icon}
			<View style={{marginHorizontal:'3%'}}>{props.text}</View>
		</View>
	)
};

export default IconText;
