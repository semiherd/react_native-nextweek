import React,{ useState, useRef } from "react"
import { Dimensions } from 'react-native'
import { fontStyles } from '../../../asset/constant/FontStyles'
import { Color } from '../../../asset/constant/Color'
import { useUserState, useUserDispatch } from '../../../context/user/UserContext'
import { InputHandle } from '../../app/input/type.input'
import { InputItem } from '../../app/input/InputItem'
import { NavButton } from '../../app/button/index'
import { warningText } from '../Warning'
import { Warning } from '../../app/error/index'
import { UserUpdateParam } from '../../../type/type.user'
import { ApiResponse, ApiResponseVals } from '../../../type/type.api'
import { NavButtonProps } from '../../../type/type.nav'
import BottomContainer from '../../app/layout/BottomContainer'
import { Roles } from "../../../context/user/type.auth"

const {height}= Dimensions.get('window')

const InputWithButton = ({field}:{field:UserUpdateParam}) => {
	const { user,manager,role }= useUserState()
	const { updateUser }= useUserDispatch()
	const inputRef= useRef<InputHandle>(null)
	const [warning,setWarning]= useState<string|null>(null)
	const { contact }= fontStyles.Profile.Setting

	function isManager(role:Roles){
		return role==='Manager'
	}
	async function onSubmit(){
		try{
			if(!inputRef.current?.getValue()){
				inputRef.current?.onFocus()
				setWarning(warningText.missing[field] || warningText.missing.default)
				return false
			}else{
				const param={
					type: field.toLowerCase() as UserUpdateParam,
					value: inputRef.current?.getValue()
				}
				const response:ApiResponseVals= await updateUser(isManager(role as Roles) ?manager!._id :user!._id,param)
				if( response=== ApiResponse.update.fail ) { 				
					setWarning(warningText.updateFailed)
					return false
				}else {
					setWarning(null)	
					return true
				}
			}
		}catch(e){
			console.log(e)
			return false
		}
	}
	
	const ButtonProps:NavButtonProps={
		text: contact.text.button,
		useBorder: false,
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

	return (	
			<>
				<InputItem multi={false} x={true} bgColor={Color.transparent} l={40} b={false} tb={true} w={0.8} h={0.075} ref={inputRef} type={`default`} placeholder={field} />				
				<BottomContainer w={1} p={{paddingV: warning===null ?height*0.25 :height*0.15}}>
					{warning===null 
						?	null 
						:	<Warning text={warning}/>
					}	
					<NavButton
						id={`ProfileSetting`} 
						styling={ButtonProps}
						onNavFn={onSubmit}
					/>					
				</BottomContainer>	
			</>
  )
}

export default InputWithButton
