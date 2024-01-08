import React from "react"
import { Row } from '../../../../component/app/layout/Layout'
import { FontStyling } from "../../../../type/type.app";
import { Text } from 'react-native'
import { stylesAlign,handleMP } from "../../../../styling"

const Item= (props:{font:FontStyling}) => {
	const styling= [
		{ overflow: 'hidden' },
		handleMP(`margin-horizontal-2`),
		handleMP(`padding-horizontal-2`),
		props.font,
	]
	return (
		<>
			<Row rowWidth={0.3} alignOption="flex-end">
			<>
				<Text style={styling}>16.11.2022</Text>
				<Text style={styling}>11.10</Text>
			</>
			</Row>
		</>
	)
}

const Time = (props:{font:FontStyling}) => {

	//const TimeComponent = withShiftLabel(TimeItem)

	const time1= new Date('2022-12-03T008:00:00Z')
	const time2= new Date('2022-12-03T008:00:00Z')

	return (
		<Row rowWidth={0.3} alignOption="center">
			<>
				<Item font={props.font} />
			</>
		</Row>
	)
};

export default Time;
