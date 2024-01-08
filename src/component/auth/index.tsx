import React from "react"
import { View } from 'react-native'
import { Dimensions,ViewStyle } from 'react-native'
import { fontStyles } from '../../asset/constant/FontStyles'
import { Color } from "../../asset/constant/Color"
import { AppLogo } from './AppLogo'
import { NavButtonProps } from '../../type/type.nav'
import { NavButton } from '../../component/app/button/index'
import BottomContainer from '../../component/app/layout/BottomContainer'

const {width,height}= Dimensions.get('window')

const logoStyles:ViewStyle={
	alignSelf: 'center',
	position: 'absolute',
	top: height * 0.25,
}

const logInButton:NavButtonProps={
	text: fontStyles.Auth.login.font.text,
	useBorder: true,
	font: fontStyles.Auth.login.font.style,
	width: 0.5,
	border: {
		borderRadius: 13,
		borderColor: Color.blue102_1,
		borderWidth: 2,
		borderBottomWidth: 0.5,
		borderBottomColor: Color.blue102_1
	}
}
const signUpButton:NavButtonProps={
	text: fontStyles.Auth.signup.font.text,
	useBorder: true,
	font: fontStyles.Auth.signup.font.style,
	width: 0.5,
	border: {
		borderRadius: 13,
		borderColor: Color.blue102_1,
		borderWidth: 2,
		borderBottomWidth: 0.5,
		borderBottomColor: Color.blue102_1
	}
}

const AuthHome = () => {

   return (
		<View style={{flex:1,backgroundColor: Color.white}}>
			<View style={logoStyles}>
				<AppLogo state={false} />
			</View>	
			<BottomContainer w={1} p={{paddingV: height*0.1}}>
				<NavButton
					id={`SignIn`} 
					styling={logInButton}
					onNavFn={null}
				/>
				<NavButton
					id={`SignUp`} 
					styling={signUpButton}
					onNavFn={null}
				/>
			</BottomContainer>
		</View>
  )
};

export default AuthHome;
