import React from "react"
import { View,Pressable } from "react-native"
import { Color } from "../../../../asset/constant/Color"
import VectorIcon from '../../../app/icon/VectorIcon'

const LeftIcon= (props:{onPress:() => void}) => {
 
	return (
		<View style={{alignSelf:'center'}}>
			<Pressable 
				style={[				
					{backgroundColor: "transparent"}
				]} 
				onPress={() => props.onPress()}
			>      
				<VectorIcon type="ant" name="plus"
					size= {24}
					color= {Color.white }
				/> 
			</Pressable> 
		</View>				  
	)
}
export default LeftIcon;