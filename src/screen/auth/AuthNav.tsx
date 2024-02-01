import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SignIn from '../../component/auth/signin/index'
import SignUp from '../../component/auth/signup/index'
import Verify from '../../component/auth/verify/index'
import ForgotPw from '../../component/auth/forgotpw/index'
import GetStarted from '../../component/auth/getstarted/index'
import AuthHome from '../../component/auth/index'

const Stack = createNativeStackNavigator();

const Auth = () => {
  return (
		<Stack.Navigator 
			initialRouteName="AuthHome" 
			screenOptions={{ headerShown: false }}
		>
			<Stack.Screen
				name="AuthHome"
				component={AuthHome}
				options={{
					headerShown: false,
					title: '',
				}}
			/>
			<Stack.Screen
				name="SignIn"
				component={SignIn}
				options={{
					headerShown: false,
					title: 'Sign in',
				}}
			/>
			<Stack.Screen
				name="SignUp"
				component={SignUp}
				options={{
					headerShown: false,
					title: 'Sign Up',
				}}
			/>
			<Stack.Screen
				name="VerifyEmail"
				component={Verify}
				options={{
					headerShown: false,
					title: 'Verify Email',
				}}
			/>
			<Stack.Screen
				name="GetStarted"
				component={GetStarted}
				options={{
					headerShown: false,
					title: 'Get Started',
				}}
			/>		
			<Stack.Screen
				name="ForgotPw"
				component={ForgotPw}
				options={{
					headerShown: false,
					title: 'Forgot Password',
				}}
			/>		
		</Stack.Navigator>
  )
};

export default Auth;
