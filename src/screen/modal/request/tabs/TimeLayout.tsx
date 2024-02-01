import React from "react"
import { View } from 'react-native'
import { Color } from '../../../../asset/constant/Color'
import { Row } from '../../../../component/app/layout/Layout'
import { ContainerStyles } from '../../../../type/type.app'
import { stylesAlign,handleMP } from "../../../../styling"
import { StateType } from './Shift'

const TimeLayout= (
	{id,containerStyling,left,right,bottom,state}:
	{
		id: 'start'|'end',
		containerStyling:ContainerStyles,
		left:React.ReactElement,
		right:React.ReactElement,
		bottom:React.ReactElement,
		state: StateType
	}
) => {
	
	const styling= [
		stylesAlign(`alignSelf_center`).container,
		handleMP(`padding-left-2`),
		handleMP(`padding-right-5`),
		handleMP(`margin-vertical-3`),
	]
	
	return (
		<View style={[
			handleMP(`padding-vertical-1`),
			handleMP(`margin-left-3`),
			{ 
				borderTopWidth: 2, 
				borderTopColor: Color.gray4,
			}		
		]}>
			<Row rowWidth={containerStyling.containerWidth} alignOption="space-between">
				<>
					<View style={styling}>
						{left}
					</View>
					<View style={styling}>
						{right}
					</View>			
				</>
			</Row>
			<View>
				{state.id===null
					? null 
					: <View>{bottom}</View>
				}	
			</View>
		</View>
		
	)
}
export default TimeLayout