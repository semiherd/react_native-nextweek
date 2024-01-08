import React,{ useState,useEffect } from "react"
import { View,Dimensions,FlatList,ListRenderItemInfo,ViewStyle } from 'react-native'
import { useMessage } from '../../../service/hook/UseMessage'
import { useUserState } from "../../../context/user/UserContext"
import { AuthState } from "../../../context/user/type.auth"
import { MessageItem } from '../../../type/type.message'
import { Room } from '../type/type.message'
import { NoContent } from '../../app/error/index'
import { Color } from '../../../asset/constant/Color'
import Message from './Message'

const { width, height } = Dimensions.get('window')

function isMe(ref:string,item:string) {
	return item===ref
}

const MessageList = ({room,title}:{room:string,title:string}) => {
	
	const { user,manager }:AuthState= useUserState()
	const { listRoomItems }= useMessage()
	const[data,setData]= useState<MessageItem[]>([])
	const userId= manager ?manager._id :user ?user._id : ''

	const messageContainer:ViewStyle={
		width: width*0.6,
		paddingHorizontal: width*0.05,
		paddingVertical: height*0.03,
		marginHorizontal: width*0.02,
		marginVertical: height*0.02,
		borderRadius: 15,
	}
	
	const renderItem= ({item}:ListRenderItemInfo<MessageItem>) => 
		<View style={[
			{ 
				alignSelf: isMe(userId,item.from._id) ?'flex-start' :'flex-end',
				backgroundColor: isMe(userId,item.from._id) ?Color.blue80 :Color.blue41
			},
			messageContainer
		]}>
			<Message w={0.6} {...item} />
		</View>
	
	const keyExtractor = (item:MessageItem) => item.item._id

	async function handleData(room:Room['id']){
		try{
			const messageList:MessageItem[]= await listRoomItems(room)
			setData(messageList)
		}catch(e){
			console.log(e)
		}
	}

	useEffect(() => {
		handleData(room)
	},[])

	return (
		<>
			{data.length
				?	<FlatList
						data={data}
						renderItem={renderItem}
						keyExtractor={keyExtractor}
						snapToAlignment="start"
						decelerationRate={"fast"}
						snapToInterval={height}
						scrollEventThrottle={16} 
						bounces={true}   
						contentContainerStyle={{
								paddingBottom: '10%',
						}} 
					/>
				: <NoContent text="No recent messages" />
			}	
		</>
	)
};

export default MessageList
