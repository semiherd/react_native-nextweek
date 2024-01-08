import React,{ useEffect, useState } from 'react'
import { Dimensions,Text } from 'react-native'
import { Col } from '../../app/layout/Layout'
import { fontStyles } from '../../../asset/constant/FontStyles'
import { handleTimePassed } from '../../../service/app/index'

const { width }= Dimensions.get('window')

const MessageInfo= (props:{time:string,unread:number}) => {
	const [label,setLabel]= useState<{passed:string}>({passed:''})
	
	async function handleLabel(){
		try{
			const timePassed:string= await handleTimePassed(new Date(props.time))
			setLabel({
				passed: timePassed
			})
		}catch(e){

		}
	}

	useEffect(() => {
		handleLabel()
	},[props])

	return (
		<Col colNr={0} alignOption="space-between">
			<>
				<Text style={[{width: width*0.15},fontStyles.Message.message.time.style]}>{label.passed}</Text>
				<Text style={[
					{alignSelf: 'center',textAlign:'center',overflow:'hidden',borderRadius:10},
					{backgroundColor: fontStyles.Message.message.new.backgroundColor},
					{width: width * fontStyles.Message.message.new.width},
					fontStyles.Message.message.new.font.style
				]}>{props.unread}</Text>
			</>
		</Col>
	)
}
export default MessageInfo