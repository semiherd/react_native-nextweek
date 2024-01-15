import React from "react"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Color } from "../../asset/constant/Color"
import { capitalizeFirstCh } from '../../service/app/index'
import { fontStyles } from '../../asset/constant/FontStyles'
import {  ChatStackList, StackGenericList } from '../../type/type.nav'
import { RouteType } from '../../component/message/type/type.message'
import Chatroom from '../../component/message/Chatroom'
import RecentMessages from '../../component/message/index'
import { RouteProp } from "@react-navigation/core";

type ChatStack= StackGenericList<ChatStackList>

const Stack = createNativeStackNavigator<ChatStack>();

type StackRoute={
	params:{
		title: string
	}
}
const ChatTab = () => {

   return (
		<Stack.Navigator
			initialRouteName="Inbox"
			screenOptions={{ headerShown: false }}
		>	
			<Stack.Screen
				name="Inbox"
				component={RecentMessages}
				options={() => ({
					title: 'Inbox',
					headerTitleShown:false,
					headerShown:false,
				})}
			/>
			<Stack.Screen
				name="Chatroom"
				component={Chatroom}
				options={({route}:{route:RouteType}) => ({
					title: capitalizeFirstCh(route?.params?.title),
					headerTitleShown:true,
					headerShown:true,
					headerTitleStyle: {
						...fontStyles.Message.room.header.font.style,
						color: Color.blue
					},					
				})}
			/>
		</Stack.Navigator>
		
   )
}

export default ChatTab


