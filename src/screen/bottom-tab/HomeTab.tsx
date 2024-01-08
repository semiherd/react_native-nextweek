import React from "react"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Color } from "../../asset/constant/Color";
import { capitalizeFirstCh } from '../../service/app/index'
import { HomeStackList, StackGenericList } from '../../type/type.nav'
import Home from '../../component/home/index'
import ViewAll from '../../component/home/ViewAll'

type HomeStack= StackGenericList<HomeStackList>

const Stack = createNativeStackNavigator<HomeStack>();

type StackRoute={
	params:{
		title: string
	}
}
const HomeTab = () => {

   return (
		<Stack.Navigator
			initialRouteName="Home"
			screenOptions={{ headerShown: false }}
		>
			<Stack.Screen
				name="Home"
				component={Home}
				options={() => ({
					title: 'Profile',
					headerTitleShown:false,
					headerShown:false,
				})}
			/>
			<Stack.Screen
				name="ViewAll"
				component={ViewAll}
				options={({route}) => ({
					title: capitalizeFirstCh(route?.params?.title),
					headerTitleShown:true,
					headerShown:true,
					headerTitleStyle: {
						alignSelf:'center',
						fontWeight:'800',
						fontSize: 20,
						color: Color.black62,
					}
				})}
			/>
		</Stack.Navigator>
		
   )
};

export default HomeTab
