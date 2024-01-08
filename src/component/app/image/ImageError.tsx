import {ErrorProps} from './type.image'
import VectorIcon from '../icon/VectorIcon'
import React,{useEffect, useState} from "react"
import {View} from 'react-native'

const ImageError= (props:ErrorProps) => {
	return (
		<View>
			<VectorIcon color="red" size={props.width} name="image-outline" type='ionicon' />
		</View>
	)
}
export default ImageError