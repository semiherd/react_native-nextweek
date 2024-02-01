import React from "react"
import { Row } from '../../../../component/app/layout/Layout'
import { FontStyling } from "../../../../type/type.app";
import { Pressable, Text } from 'react-native'
import { handleMP } from "../../../../styling"
import {getDMY, getHourMinute  } from '../../../../service/app/FormatDate'
import { StateType } from './Shift'
const Time= (props:
	{
		font:FontStyling,
		value:Date,
		id: 'start'|'end'|null
		setState: React.Dispatch<React.SetStateAction<StateType>>
	}) => {
	
	const styling= [
		{ overflow: 'hidden' },
		handleMP(`margin-horizontal-2`),
		handleMP(`padding-horizontal-2`),
		props.font,
		{ alignSelf: 'center', padding: '5%'},
	]
	
	const handleClick= (t:'day'|'time') => props.setState({id:props.id,type:t})
	
	return (
		<Row rowWidth={0.2} alignOption="flex-end">
			<>
				<Pressable onPress={() => handleClick('day')}><Text style={styling}>{getDMY(props.value)}</Text></Pressable>
				<Pressable onPress={() => handleClick('time')}><Text style={styling}>{getHourMinute(props.value)}</Text></Pressable>
			</>
		</Row>
	)
}


export default Time;
