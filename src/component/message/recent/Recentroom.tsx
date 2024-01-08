import React from 'react'
import { useNavigation } from "@react-navigation/core"
import {Text,Pressable} from 'react-native'
import { MessageItem, MessageType } from '../../../type/type.message'
import { fontStyles } from '../../../asset/constant/FontStyles'
import AvatarImage from '../../app/image/AvatarImage'
import MessageLayout from './MessageLayout'
import MessageInfo from './MessageInfo'
import TextContent from './TextContent'

function switchType(props: MessageItem){
		
	switch (props.type) {
		case 'Text':
			return <TextContent {...props} />
		//case 'image':
		// 	return <ImageMessage data={message.item} />
		//case 'audio':
		//	return <AudioMessage data={data} />
	default:
		return null
	}
}

const From= ({text}:{text:string}) => <Text style={fontStyles.Message.message.from.font.style}>{text}</Text>

const Content= (props: MessageItem & {type:MessageType}) => 
	<>
		<From text={props.from.name} />
		{switchType(props)}
	</>

const Recentroom= (props:MessageItem) => {
	
	const navigation= useNavigation()
	
	async function openChatroom(){        
		try{
			navigation.navigate('Chatroom',{
				title: props.from.name,
				room: props.item.chat
			})
		}catch(e){
			console.log(e)
		}
	}

	const unread= 4

	return (
		<Pressable onPress={() => openChatroom()}>
			<MessageLayout 
				avatar={<AvatarImage styling={{width:66,height:66}} data={props?.from} />}
				content={<Content {...props} type={`Text`} />}
				info={<MessageInfo time={props.item.date} unread={unread} />}
			/>
		</Pressable>
	)
}
export default Recentroom