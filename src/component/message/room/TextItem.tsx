import React from 'react'
import { Dimensions,Text } from 'react-native'
import { Row } from '../../app/layout/Layout'
import { MessageItem } from '../../../type/type.message'
import { Color } from '../../../asset/constant/Color'
import { FontStyling } from '../../../type/type.app'
import { User, Manager } from '../../../context/user/type.user'
import { useUserState } from '../../../context/user/UserContext'

const { width } = Dimensions.get('window')

function isMe(ref:string,item:string) {
	return item===ref
}

const TextItem= (props:MessageItem & {w:number,font:FontStyling})  => {
	const { user,manager }= useUserState()
	const myId:User['_id']|Manager['_id']= manager ?manager._id :user ?user._id :''
	
	return (
		<Row rowWidth={props.w} alignOption="flex-start">
			<>
				{myId 
					?	<Text style={[
							props.font,
							{padding: '2%'},
							{color: isMe(myId,props.from._id) ? Color.white : Color.white}
						]}>{props.item.content}</Text>
					: null
				}
			</>
		</Row>
	)
}
export default TextItem