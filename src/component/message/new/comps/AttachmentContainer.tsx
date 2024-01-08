import React from "react"
import { View, Text,TextStyle } from 'react-native'
import { Color } from "../../../../asset/constant/Color"
import { Attach } from '../../type/type.message'
import { AttachId  } from '../../type/type.message'
import AttachOptions from './AttachOptions'

const labelStyle:TextStyle={
	fontFamily: 'Lato',
	fontSize: 18,
	fontWeight: '500',
	textAlign: 'center',
	color: Color.black90,
	margin: '3%'
}

function AttachmentContainer(
	{data,onPress}:
	{
		data:Attach[],
		onPress:(id:AttachId)=>void,
	}
){
  
	return (
		<View style={{ borderRadius: 5,backgroundColor: Color.white, padding: '5%',alignSelf:'center' }}>
			{data.map((item:Attach,idx:number) =>
				<AttachOptions<Attach['id']> 
					key={idx.toString()}
					icon={item.icon}
					text={<Text style={labelStyle}>{item.label}</Text>}
					bg={Color.white}
					item={item.id}
					onPress={onPress}
				/>
			)}
		</View>
	)
}
export default AttachmentContainer
