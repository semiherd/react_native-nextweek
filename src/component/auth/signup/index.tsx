import React from "react"
import { View } from 'react-native'
import { Color } from "../../../asset/constant/Color"
import AuthLayout from "../AuthLayout"
import Header from '../Header'
import SignUpForm from './SignUpForm'
import TitleItem from '../TitleItem'

const SignUp = () => {
	const version:number= 1

  return (
	 <View style={{flex:1, backgroundColor: version===0 ?Color.white :Color.blue102_1}}>
		 <AuthLayout 
			head={<Header logo={version===0 ?false:true} />}
			title={<TitleItem version={version} name={`SignUp`} /> }
			content={<SignUpForm version={version} name={`SignUp`} />}
		 />
	 </View>
  )
};

export default SignUp
