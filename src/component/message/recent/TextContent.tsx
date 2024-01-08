import React from 'react'
import { Text } from 'react-native'
import { Col } from '../../app/layout/Layout'
import { MessageItem } from '../../../type/type.message'
import { fontStyles } from '../../../asset/constant/FontStyles'
import { Color } from '../../../asset/constant/Color'
import { useUserState } from '../../../context/user/UserContext'

function isMe(ref:string,item:string) {
	return item===ref
}

const TextContent= (props:MessageItem)  => {
	const { item, from, type }= props
	const { user, manager }= useUserState()
	return (
		<Col colNr={1} alignOption="space-around">
			<>
				{item.content && 
					<Text style={[
						fontStyles.Message.message.text.font.style,
						{color: isMe(manager ?manager._id :user ?user._id : 'null' ,item.sendBy) ? Color.blue : Color.black}
					]}>{item.content.length<40? item.content.toString(): `${item.content.slice(0,40)}...`}</Text>}
			</>
		</Col>
	)
}
export default TextContent