import React,{ useRef, useState } from "react"
import { Dimensions,Text } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { InputHandle } from '../../app/input/type.input'
import { InputItem } from '../../app/input/InputItem'
import { Color } from '../../../asset/constant/Color'
import { VerifyButtonProps } from './ButtonProps'
import { NavButton } from '../../app/button/index'
import { useUserDispatch } from '../../../context/user/UserContext'
import { Roles, SignUpResponse } from '../../../context/user/type.auth'
import { warningText } from '../Warning'
import { Warning } from '../../app/error/index'
import { isValidPw,isValidEmail } from '../../../service/app/index'
import { Api_AuthUserSignUp_Param } from '../../../context/user/type.auth'
import { LoginButton,InputText0,InputText1 } from "./ButtonProps"
import { Row } from '../../app/layout/Layout'
import { FontStyling } from "../../../type/type.app"
import { AuthStackType } from '../../../type/type.nav'
import { stylesForm } from '../style/Form'
import BoxIcon from '../../app/icon/BoxIcon'
import BottomContainer from '../../app/layout/BottomContainer'

const {width,height}= Dimensions.get('window')

const SignUpForm = (props:{version:number,name:AuthStackType}) => {

	const { signUp }= useUserDispatch()
	const nameRef= useRef<InputHandle>(null)
	const emailRef= useRef<InputHandle>(null)
	const rpwRef= useRef<InputHandle>(null)
	const pwRef= useRef<InputHandle>(null)
	const roleRef= useRef<Roles>('User')

	const [warning,setWarning]= useState<string|null>(null)

	async function onSubmit():Promise<boolean>{
		try{
			const nameVal= nameRef.current?.getValue()
			const emailVal= emailRef.current?.getValue()
			const pwVal= pwRef.current?.getValue()
			const rpwVal= rpwRef.current?.getValue()
			
			if(!nameRef.current?.getValue()){
				setWarning(warningText.missingName)
				nameRef.current?.onFocus()
				return false
			}else if(!emailRef.current?.getValue()){
				setWarning(warningText.missingEmail)
				emailRef.current?.onFocus()
				return false
			}else if(emailVal && !isValidEmail(emailVal)){
					setWarning(warningText.invalidEmail)
					emailRef.current?.onFocus()
					return false
			}else if (!pwRef.current?.getValue()){
				setWarning(warningText.missingPw)
				pwRef.current?.onFocus()
				return false
			}else if (!rpwRef.current?.getValue()){
				setWarning(warningText.missingPw)
				pwRef.current?.onFocus()
				return false
			}else if(pwVal && !isValidPw(pwVal)){
				setWarning(warningText.invalidPw)
				emailRef.current?.onFocus()
				return false
			}else if(rpwVal && pwVal && rpwVal!==pwVal){
				setWarning(warningText.invalidPw)
				rpwRef.current?.onFocus()
				return false
			}else if(nameVal && emailVal && pwVal && rpwVal===pwVal && isValidEmail(emailVal) && isValidPw(pwVal)){
					const param:Api_AuthUserSignUp_Param={
						role: 'User', //roleRef.current?.getValue(),
						email: emailRef.current?.getValue(),
						password: pwRef.current?.getValue(),
						name: nameRef.current?.getValue()
					}				
					setWarning(null)			
					const authResponse:SignUpResponse= await signUp(param)
					if(authResponse===null) {
						setWarning(warningText.signUpFailed)
						return false
					}
					return true
			}else return false
		}catch(e){
			setWarning(warningText.signUpFailed)
			return false
		}
	}
	
	async function handleRole(){
		try{
			const response= roleRef.current==='User' ?'Manager' :'User'
			roleRef.current= response
		}catch(e){
			console.log('handlerole error:',e)
		}
	}

	const InputStyle:FontStyling= 
		props.version===0
			? InputText0
			: props.version===1
				? InputText1
				: {}

	const InputBorderStyle= props.version===0 ?true :props.version===1 ?false :false
	const InputBgStyle= props.version===0 ?Color.transparent :props.version===1 ?Color.gray92 :Color.transparent
  
	return (	
			<GestureHandlerRootView style={stylesForm(props.version,props.name).container}> 
				{warning===null 
					? null 
					: <Warning text={warning}/>
				}	
				<BottomContainer w={1} p={{ paddingV: height* 0.03 }}>
					<InputItem multi={false} font={InputStyle} x={true} bgColor={InputBgStyle} l={40} b={InputBorderStyle} tb={false} w={0.7} h={0.05} ref={nameRef} type={`default`} placeholder="full-name" />
					<InputItem multi={false} font={InputStyle} x={true} bgColor={InputBgStyle} l={40} b={InputBorderStyle} tb={false} w={0.7} h={0.05} ref={emailRef} type={`email-address`} placeholder="email" onSubmit={() => pwRef.current?.onFocus()}  />				
					<InputItem multi={false} font={InputStyle} x={true} bgColor={InputBgStyle} l={40} b={InputBorderStyle} tb={false} w={0.7} h={0.05} ref={pwRef} type={`default`} placeholder="password" />
					<InputItem multi={false} font={InputStyle} x={true} bgColor={InputBgStyle} l={40} b={InputBorderStyle} tb={false} w={0.7} h={0.05} ref={rpwRef} type={`default`} placeholder="repeat-password" />
					<BoxIcon
						label={`sign up as manager`} 
						onPress={handleRole} 			 
					/>
					<NavButton
						id={`VerifyEmail`} 
						styling={VerifyButtonProps}
						onNavFn={onSubmit}
					/>
					<Row rowWidth={1} alignOption="center"><>
						<Text style={[
							stylesForm(props.version,props.name).text,
							stylesForm(props.version,props.name).login
						]}>Already have an account?</Text>			
						<NavButton
							id={`SignIn`} 
							styling={LoginButton}
							onNavFn={null}
						/>
					</>
					</Row>
				</BottomContainer>	
			</GestureHandlerRootView>
  )
}

export default SignUpForm
