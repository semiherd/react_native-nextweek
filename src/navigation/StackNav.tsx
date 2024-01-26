import React,{ useEffect } from "react"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StackParams } from '../type/type.nav'
import BottomTabNav from './BottomTabNav'
import AuthNav from '../screen/auth/AuthNav'
import Splash from '../screen/splash/Splash'
import { useUserState, useUserDispatch } from '../context/user/UserContext'

const StackNav = () => {
	const { token }= useUserState()
	
	const Stack = createNativeStackNavigator<StackParams>()

	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			{token===null
				? <Stack.Screen name="AUTH" component={AuthNav} />
				: <Stack.Screen name= "MAIN" component= {BottomTabNav} /> 
			}
		</Stack.Navigator>
	)
}
export { StackNav }
