import React,{useEffect, useState} from "react"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StackParams } from '../type/type.nav'
import BottomTabNav from './BottomTabNav'
import AuthNav from '../screen/auth/AuthNav'
import Splash from '../screen/splash/Splash'
import { useUserState } from '../context/user/UserContext'

const StackNav = () => {
	const state= useUserState()


	const Stack = createNativeStackNavigator<StackParams>();
   return (
	 	<Stack.Navigator 
         screenOptions={{ headerShown: false }}
      >
			<Stack.Screen name= "MAIN" component= {BottomTabNav} /> 
    </Stack.Navigator>
  )
};

export {
	StackNav
}
