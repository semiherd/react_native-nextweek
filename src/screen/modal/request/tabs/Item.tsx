import React from "react"
import { View } from 'react-native'
import { Row,Col } from '../../../../component/app/layout/Layout'
import { ContainerStyles, FontStyling } from '../../../../type/type.app'
import { stylesAlign,handleMP } from "../../../../styling"

const Item= (
	{id,containerStyling,left,right}:
	{
		id:string,
		containerStyling:ContainerStyles,
		left:React.ReactElement,
		right:React.ReactElement
	}
) => {
	
	const styling= [
		stylesAlign(`alignSelf_center`).container,
		handleMP(`padding-vertical-5`),
		handleMP(`padding-horizontal-5`),
		handleMP(`margin-vertical-2`),
	]
	return (
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
			
	)
}
export {
	Item
}