import React from "react"
import { Pressable, Dimensions } from 'react-native'
import {ColorValues } from "../../../../asset/constant/Color"
import IconText from '../../../app/text/IconText'

const {width}= Dimensions.get('window')

function AttachOptions<T>(
	{icon,text,item,onPress,bg}:
	{		
		icon: React.ReactElement,
		text: React.ReactElement,
		onPress: (item:T) => void,
		bg: ColorValues,
		item: T
	}) {

	return (
		<Pressable  
			onPress={() => onPress(item)}	
			style={{
				alignSelf:'center',
				width: width*0.5,
				backgroundColor: bg,
				padding: '1%',
				marginVertical: '1%',
				borderBottomWidth: 0.5,
				borderColor: 'teal',
			}}
		>
			<IconText
				direction="row"
				align="flex-start"
				icon={icon}
				text={text}
			/>
		</Pressable>
	)
}
export default AttachOptions