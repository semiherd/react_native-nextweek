import React,{ useEffect } from "react"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StackParams } from '../type/type.nav'
import BottomTabNav from './BottomTabNav'
import AuthNav from '../screen/auth/AuthNav'
import Splash from '../screen/splash/Splash'
import { useUserState, useUserDispatch } from '../context/user/UserContext'

const StackNav = () => {
	const { token, user, manager }= useUserState()
	const { getStorage }= useUserDispatch()
	
	async function handleStorageData(){
		try{
			const data:{accessToken: string,time: Date}|false= await getStorage('accessToken')
			console.log('storage data:',data,new Date())
			const refreshRange:number= 1000
			if(data!==false){
				const refreshRequest:boolean= new Date().getTime() - new Date(data.time).getTime()>refreshRange ?true :false
				if(refreshRequest){
					console.log('refreshToken api to be called')
					//refreshTokenApi()
				}
			}
		}catch(e){
			console.log(e)
		}
	}

	useEffect(() => {
		handleStorageData()
	},[])

	const Stack = createNativeStackNavigator<StackParams>();
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
