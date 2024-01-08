import React from "react"
import { Dimensions,Text } from 'react-native'
import { UpdateDataType } from '../../../type/type.update'
import { ImageSource } from '../../../app/image/type.image'
import {IconText} from '../../../app/text/index'
import ImageItem from '../../../app/image/ImageItem'
import {Color} from '../../../../asset/constant/Color'
import {Col} from '../../../app/layout/Layout'

const {width} = Dimensions.get('window')
const imageSize= width*0.05

const imageItem= (image: ImageSource) => 
	<ImageItem 
		styling={
			{height:imageSize,width:imageSize,backgroundColor: Color.iconBg,borderWidth:0,borderColor: Color.blue, borderRadius:20}
		} 
		width={width*0.05} 
		height={width*0.05} 
		image={image} />

const Message= ({message,heading}:Omit<UpdateDataType,'id'|'icon'>) => {
	return (
		<Col colNr={1} alignOption="center">
			<>
				<Text style={{margin:'2%'}}>{heading}</Text>
				<Text style={{margin:'2%'}}>{message}</Text>
			</>
		</Col>
	)
}

const UpdateContent = (props:UpdateDataType) => {
	return <IconText
			icon={imageItem(props.icon)}
			text={<Message heading={props.heading} message={props.message} />}
			direction='row'
			align="center"
		/>
}

export default UpdateContent
