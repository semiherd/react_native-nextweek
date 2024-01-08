import React from "react"
import {View,Dimensions} from 'react-native'
import {SubType,MarginPaddingStyling,ReactChildren} from '../../../type/type.app'

type Props= ReactChildren & {w:number,p?:SubType<MarginPaddingStyling,'paddingV'|'marginV'>}
const {width}= Dimensions.get('window')

const BottomContainer = (props:Props) => {
	const {children,w,p}=props
	
	return (
	 	<View 
			style={[
				{
					position: 'absolute',
					bottom: p?.paddingV ?p.paddingV : 0,
					left: 0,
					justifyContent: 'center',
					width: w? width*w:width,
				},
			]}
		>
			{children}
	 	</View>
  ) 
};

export default BottomContainer;
