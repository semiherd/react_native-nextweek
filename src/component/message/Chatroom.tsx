import React from "react"
import { View,Dimensions} from "react-native"
import { RouteType } from './type/type.message'
import { MessageProvider } from '../../context/chat/MessageContext'
import MessageInput from '../message/new/MessageInput'
import MessageList from '../message/room/MessageList'
import BottomContainer from '../app/layout/BottomContainer'

const { height}= Dimensions.get('window')

const Chatroom = ({route}:{route: RouteType}) => {
	
	return (
		<BottomContainer w={1} >
			<View style={{ paddingBottom: height*0.05}}>
				<MessageList room={route.params} />
			</View>
			<MessageProvider>
				<MessageInput room={route.params} />
			</MessageProvider>
				
		</BottomContainer>		
	)
}
export default Chatroom
