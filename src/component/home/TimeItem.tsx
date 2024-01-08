import React from "react"
import {Dimensions, Text } from 'react-native'
import { timePng } from '../../asset/image/home/index'
import { TimeString, FontStyling } from '../../type/type.app'
import { styles } from './style/TimeItem'
import { ImageSource } from "../app/image/type.image"
import IconText from '../app/text/IconText'
import ImageItem from '../app/image/ImageItem'

const {width}= Dimensions.get('window')
const imageItem= (image: ImageSource|null) => <ImageItem width={width*0.05} height={width*0.05} image={image} />

const TimeItem = (props:{icon?:boolean,text:TimeString,font:FontStyling}) => {

	return (
		<IconText
			icon={props.icon ?imageItem(timePng): null}
			text={<Text style={styles(props.font).text}>{props.text}</Text>}
			direction='row'
			align="flex-start"
		/>
	)
}

export default TimeItem
