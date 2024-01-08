import {LoadingProps} from './type.image'
import VectorIcon from '../icon/VectorIcon'
import React from "react"
import {StyleSheet,View} from 'react-native'

const LoadingItem= (props:LoadingProps) => {
	return (
		<View style={styles.container}>
			<VectorIcon color="black" size={props.width} name="image-outline" type='ionicon' />
		</View>
	)
}
export default LoadingItem

const styles= StyleSheet.create({
	container:{

	}
})