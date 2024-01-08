import React,{ useState, useRef } from "react"
import { Pressable,Dimensions,Text, TextStyle } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { useUserDispatch } from '../../../context/user/UserContext'
import { InputHandle } from '../../app/input/type.input'
import { InputItem } from '../../app/input/InputItem'
import { Color } from '../../../asset/constant/Color'
import { NavButton } from '../../app/button/index'
import { ApiResponse, ApiResponseVals } from '../../../type/type.api'
import { Roles, SignInParam, SignInResponse } from '../../../context/user/type.auth'
import { warningText } from '../Warning'
import { Warning } from '../../app/error/index'
import BottomContainer from '../../app/layout/BottomContainer'
import BoxIcon from '../../app/icon/BoxIcon'
import { 
	Api_AuthUserSignIn, 
	Api_AuthManagerSignIn,
} from "../../../context/user/type.auth"
import { isValidPw,isValidEmail } from '../../../service/app/index'
import { ForgotPwProps, LogInProps } from './ButtonProps'
import { FontStyling } from "../../../type/type.app"
import { AuthStackType } from '../../../type/type.nav'
import { stylesForm } from '../style/Form'
import { InputText0,InputText1 } from "../signup/ButtonProps"

const {height}= Dimensions.get('window')


const SignInForm = (props:{version:number,name:AuthStackType}) => {
	const {handleSignIn}= useUserDispatch()

	const emailRef= useRef<InputHandle>(null)
	const pwRef= useRef<InputHandle>(null)
	const roleRef= useRef<Roles>('User')

	const [warning,setWarning]= useState<string|null>(null)

	async function onSubmit():Promise<boolean>{
		try{
			if(!emailRef.current?.getValue()){
				emailRef.current?.onFocus()
				setWarning(warningText.missingEmail)
				return false
			}else if (!pwRef.current?.getValue()){
				pwRef.current?.onFocus()
				setWarning(warningText.missingPw)
				return false
			}else{
				if(isValidEmail(emailRef.current?.getValue()) &&  isValidPw(pwRef.current?.getValue())){
					const param:SignInParam={
						role: 'User', //roleRef.current?.getValue(),
						email: emailRef.current?.getValue(),
						password: pwRef.current?.getValue()
					}
					
					setWarning(null)			
					const authResponse:ApiResponseVals= await handleSignIn(param)
					if(authResponse===ApiResponse.signIn.success) {
						return true
					}else{
						setWarning(warningText.authFailed)
						return false
					}
				}else if(!isValidEmail(emailRef.current?.getValue())){
					setWarning(warningText.invalidEmail)
					emailRef.current?.onFocus()
					return false
				}else if(!isValidPw(pwRef.current?.getValue())){
					setWarning(warningText.invalidPw)
					pwRef.current?.onFocus()
					return false
				}else return false
			}
		}catch(e){
			console.log(e)
			return false
		}
	}

	async function handleRole(){
		try{
			const response= roleRef.current==='User' ?'Manager' :'User'
			roleRef.current= response
			console.log('roleRef:',roleRef)
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
					?null 
					:<Warning text={warning}/>
				}	
				<InputItem multi={false} font={InputStyle} x={true} bgColor={InputBgStyle} l={40} b={InputBorderStyle} tb={false} w={0.8} h={0.075} ref={emailRef} type={`email-address`} placeholder="email" onSubmit={() => pwRef.current?.onFocus()}  />				
				<InputItem multi={false} font={InputStyle} x={true} bgColor={InputBgStyle} l={40} b={InputBorderStyle} tb={false} w={0.8} h={0.075} ref={pwRef} type={`default`} placeholder="password" />
				<BoxIcon
						label={`login as manager`} 
						onPress={handleRole} 			 
				/>					
				<BottomContainer w={1} p={{paddingV: warning===null ?height*0.05 :height*0.02}}>
					<NavButton
						id={`SignIn`} 
						styling={LogInProps}
						onNavFn={onSubmit}
					/>
					<NavButton
						id={`ForgotPw`} 
						styling={ForgotPwProps} 
						onNavFn={null}
					/>						
				</BottomContainer>	
			</GestureHandlerRootView>
  )
}
export default SignInForm
