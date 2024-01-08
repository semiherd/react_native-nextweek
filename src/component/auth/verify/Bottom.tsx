import React,{ useState } from "react"
import { Dimensions } from 'react-native'
import { NavButton } from '../../app/button/index'
import { Warning } from '../../app/error/index'
import { warningText } from '../Warning'
import { useUserDispatch } from "../../../context/user/UserContext"
import { Api_AuthVerify } from "../../../context/user/type.auth"
import { ApiResponse } from "../../../type/type.api"
import { VerifyButtonProps } from './ButtonProps'
import BottomContainer from '../../app/layout/BottomContainer'
import ResendContainer from './ResendContainer'

const { height } = Dimensions.get('window')
const l= 4

const BottomView= (props:{handleInput:() => Promise<number[]|null>}) => {
	const [warning,setWarning]= useState<string|null>(null)
	const { verifyCode }= useUserDispatch()

	async function onVerify(): Promise<boolean>{
		try{
			const codes:number[]|null= await props.handleInput()
			if(codes===null) {
				setWarning(warningText.missingCode)
				return false
			}else if(!codes.includes(NaN) && codes.length===l){
				const verify:Api_AuthVerify= await verifyCode(codes)
				const w:string|null=verify===ApiResponse.verify.fail ?warningText.failedVerification :null
				setWarning(w)
				return verify===ApiResponse.verify.success ?true :false
			}
			return false		
		}catch(e){
			setWarning(warningText.failedVerification)
			return false
		}
	}

	return (
		<BottomContainer w={1} p={{paddingV: height*0.05}}>				
			{warning===null 
					?null 
					:<Warning text={warning}/>
			}							
			<ResendContainer />	
			<NavButton
				id={`GetStarted`} 
				onNavFn={onVerify}
				styling={VerifyButtonProps}
			/>						
		</BottomContainer>	
	)
}

export default BottomView
