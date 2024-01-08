import React,{ useEffect, useState } from "react"
import SubContainer from '../../../../component/app/layout/SubContainer'
import VectorIcon from '../../../../component/app/icon/VectorIcon'
import Time from './Time'
import { View,Pressable } from 'react-native'
import { Color } from '../../../../asset/constant/Color'
import { Row,Col } from '../../../../component/app/layout/Layout'
import { Title } from '../../../../component/app/text/index'
import { ContainerStyles, FontStyling } from '../../../../type/type.app'
import { stylesAlign,handleMP } from "../../../../styling"
import { fontStyles } from '../../../../asset/constant/FontStyles'
import { TabItem } from '../../../../component/app/button/tab/type.tab'
import { useModalDispatch } from '../../../../context/modal/ModalContext'


const Item= (
	{id,containerStyling,left,right}:
	{
		id:string,
		containerStyling:ContainerStyles,
		left:React.ReactElement,
		right:React.ReactElement
	}
) => {
	const [state,setState]= useState<boolean>(false)
	const styling= [
		stylesAlign(`alignSelf_center`).container,
		handleMP(`padding-vertical-5`),
		handleMP(`margin-vertical-2`)
	]
	return (
		<>
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
		</>	
	)
}
export {
	Item
}