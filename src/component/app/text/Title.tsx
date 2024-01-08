import React from "react"
import {View,Text} from 'react-native'
import { TitleItemProps } from '../../../type/type.app'
import {styles} from './style/Title'

const Title = (props:TitleItemProps) => {
	const {fontStyling}= props

	const fontStyles= fontStyling ?fontStyling:{}
	
	return (
	 	<View style={[styles(fontStyles).container]}>
			<Text style={styles(fontStyles).text}>{props.titletext}</Text>
		</View> 
	)
};

export default Title;
