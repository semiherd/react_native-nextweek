import React from "react"
import { Text } from 'react-native'
import { User } from '../../../context/user/type.user'
import { Row } from '../../app/layout/Layout'
import { SubType } from '../../../type/type.app'
import { fontStyles } from "../../../asset/constant/FontStyles";
import AvatarImage from "../../../component/app/image/AvatarImage";

const MessageHeader= (props:{w:number,time:Date,by:SubType<User,'_id'|'name'|'image'>}) => {
	const avatarStylng={
		width: 25,
		height: 25
	}
	const messageBy= fontStyles.Message.message.item.by.font.style

	return (
		<Row rowWidth={props.w} alignOption="flex-start">
			<>
				<AvatarImage data={props.by} styling={avatarStylng}/>
				<Text style={[{marginHorizontal:'3%',alignSelf:'center'},messageBy]}>{props.by.name}</Text> 
			</>
		</Row>
	)
}
export default MessageHeader