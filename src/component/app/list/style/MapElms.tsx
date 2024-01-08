import React from 'react'
import {Dimensions,StyleSheet} from 'react-native'
import {Color} from '../../../../asset/constant/Color'

const {width,height}= Dimensions.get('window')

export const styles= StyleSheet.create({
	container:{
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		width: width * 0.4,
		margin: '5%'
	}
})