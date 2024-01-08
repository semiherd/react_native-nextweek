import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ProfileStackParamList, StackGenericList } from '../../type/type.nav'
import { Color } from '../../asset/constant/Color';
import ProfileHome from '../../component/profile/index'
import ProfileSetting from '../../component/profile/setting'
import Update from '../../component/profile/setting/Update'

type ProfileStack= StackGenericList<typeof ProfileStackParamList>

const Stack = createNativeStackNavigator<ProfileStack>();

const ProfileTab = () => {
	
   return (
			<Stack.Navigator
				initialRouteName="ProfileHome"
				screenOptions={{ headerShown: false }}
			>
				<Stack.Screen
					name="ProfileHome"
					component={ProfileHome}
					options={() => ({
					title: 'Profile',
					headerTitleShown:false,
					headerShown:false,
					})}
				/>
				<Stack.Screen
					name="ProfileSetting"
					component={ProfileSetting}
					options={() => ({
						title: 'Setting',
						headerTitleShown:false,
						headerShown:false,
					})}
				/>
				<Stack.Screen
					name="Update"
					component={Update}
					options={({route}) => ({
						title: '',
						headerTitleShown: false,
						headerShown: true,
						headerTitleStyle: {
							alignSelf:'center',
							fontWeight:'600',
							fontSize: 20,
							color: Color.white,
						},
						headerTintColor: Color.white,
						headerStyle: {
							backgroundColor: Color.blue,
						},
						headerBackTitleVisible: false,
						headerTitleVisible: false,
					})}
				/>
			</Stack.Navigator>
    )
}

export default ProfileTab
