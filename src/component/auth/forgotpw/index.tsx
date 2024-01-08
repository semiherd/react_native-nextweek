import React,{ useRef } from "react"
import { Dimensions } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { useUserDispatch } from "../../../context/user/UserContext"
import { InputItem } from '../../app/input/InputItem'
import { Color } from '../../../asset/constant/Color'
import { NavButton } from '../../app/button/index'
import { Row } from '../../app/layout/Layout'
import { InputHandle } from '../../app/input/type.input'
import { ApiResponse, ApiResponseVals } from "../../../type/type.api"
import { Api_AuthPwUpdate_Param } from "../../../context/user/type.auth"
import BottomContainer from '../../app/layout/BottomContainer'
import { UpdateProps, CancelProps } from './ButtonProps'

const {height}= Dimensions.get('window')

const ForgotPw = () => {
	const newPwRef= useRef<InputHandle>(null)
	const { onPwUpdate }= useUserDispatch()

	async function onSubmit():Promise<boolean>{
		try{
			const val:Api_AuthPwUpdate_Param= {
				password: newPwRef.current?.getValue() as string
			}
			if(val){
				const response:ApiResponseVals= await onPwUpdate(val)
				if(response===ApiResponse.pwUpdate.success )
					return true
				else 
					return false
			}
			return false
		}catch(e){
			console.log(e)
			return false
		}
	}
	
	async function handleChange(){
		try{
			console.log('handleCHange called')
		}catch(e){
			console.log(e)
		}
	}
	
  return (	
			<GestureHandlerRootView style={{flex:1}}> 
				<BottomContainer w={1} p={{paddingV: height*0.5}}>
					<InputItem x={true} bgColor={Color.white} multi={false} l={40} b={true} tb={false} w={0.8} h={0.1} ref={newPwRef} type={`default`} placeholder="new-password" onSubmit={handleChange}  />				
					<Row rowWidth={1} alignOption="center"><>
						<NavButton
							id={`SignIn`} 
							styling={UpdateProps} 
							onNavFn={onSubmit}
						/>						
						<NavButton
							id={`AuthHome`} 
							styling={CancelProps} 
							onNavFn={null}
						/>
					</></Row>				
				</BottomContainer>	
			</GestureHandlerRootView>
  )
}

export default ForgotPw
