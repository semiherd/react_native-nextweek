import React,{ useState } from "react"
import { Pressable,Dimensions,Text,TextStyle } from 'react-native'
import { Color } from '../../../asset/constant/Color'
import { IconText } from "../text"
import { FontStyling } from "../../../type/type.app"

const {width,height}= Dimensions.get('window')

type PropsType= { label: string, onPress: () => void }

const Font:TextStyle={
		fontFamily: 'Lato' as FontStyling['fontFamily'],
		fontSize: 14,
		fontWeight: '200' as FontStyling['fontWeight'],
		lineHeight: 18,
		color: Color.black,
		backgroundColor: Color.white,
		textAlign: 'center',
}

const BoxIcon = 
	({label,onPress}:PropsType) => {
		const [selected,setSelected]= useState<boolean>(false)
		
		const BoxStyle:TextStyle={
			height: width*0.05,
			width: width*0.05,
			borderRadius: 5,
			borderWidth: 0.5,
			overflow: 'hidden',
			textAlign: 'center',
			backgroundColor: selected 
				? Color.black90
				:	Color.white 
		}

		async function onChange(){
			try{
				setSelected((i) => !i)
				onPress()
			}catch(e){
				console.log(e)
			}
		}
		return( 
			<Pressable 
				style={({pressed}) => [
					{marginLeft:'15%', alignSelf: 'flex-start', marginVertical:'2%'}, 
				]} 
				onPress={onChange}
			> 
				<IconText
					direction="row"
					align="flex-start"
					icon={<Text style={[BoxStyle]}></Text>}
					text={<Text style={Font}>{label}</Text>}
				/>
			</Pressable> 
		)
}
export default BoxIcon