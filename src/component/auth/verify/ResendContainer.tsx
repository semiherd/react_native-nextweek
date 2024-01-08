import React,{ useEffect,useState} from "react"
import { Dimensions,View,Text,Pressable,TextStyle } from 'react-native'
import { useUserDispatch } from "../../../context/user/UserContext"
import { Color } from '../../../asset/constant/Color'
import { Row } from '../../app/layout/Layout'
import { NavButton } from '../../app/button/index'
import { BackHomeButton } from "./ButtonProps"
import { Api_AuthVC } from "../../../context/user/type.auth"
import { ApiResponse } from "../../../type/type.api"
import Resend from './Resend'

const duration= 60
const {height}= Dimensions.get('window')

const timerStyling:TextStyle={
	alignSelf: 'center',
	fontFamily: 'Mazzard',
	fontSize: 18,
	fontWeight: '400',
	lineHeight: 21.28,
	color: Color.black95,
	marginBottom: '3%',
}

const ResendContainer= () => {
	const [resend,setResend]= useState<boolean>(false)
	const [resendTime,setResendTime]= useState<number>(0)
	const { getVC }= useUserDispatch()

	async function onResend():Promise<void>{
		try{
			const response:Api_AuthVC= await getVC()		
			if(response===ApiResponse.vc.success ){
				setResend(true)
				setResendTime(duration)
			}
		}catch(e){
			setResend(false)
		}
	}
	
	useEffect(() => {
		if(resend && resendTime>0){
			const interval= setInterval(() => {
				setResendTime((prev) => prev - 1);
			}, 1000)
			return () => clearInterval(interval)
		}
	},[resend,resendTime])
	
	useEffect(() => {
		onResend()
	},[])

	return (
		<>
			{resendTime<=0 
				? null
				: resendTime<duration
					? <Text style={timerStyling}>00:{resendTime<10 ?`0${resendTime}` : resendTime}</Text>
					: null
			}	
			<Row rowWidth={0.95} alignOption="center">
				<>
					<View style={{transform:[{translateY:height*-0.01}]}}>
						<NavButton
							id={`SignUp`} 
							styling={BackHomeButton}
							onNavFn={null}
						/>
					</View>			
					<Pressable onPress={onResend}>
						<Resend />
					</Pressable>
				</>
			</Row>		
		</>
	)
}

export default ResendContainer;
