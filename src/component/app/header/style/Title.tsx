import {Dimensions,StyleSheet} from 'react-native'
import {Color} from '../../../../asset/constant/Color'

const {width,height} = Dimensions.get('window')

export const styles= StyleSheet.create({
	container:{
		top: height * 0.075,
		left: width * 0.1
	},
	title: {
		fontFamily: 'Mazzard',
		fontWeight: '600',
		fontSize: 25,
		lineHeight: 37.5,
		color: Color.white,
	},
	subtitle:{
		fontFamily: 'Mazzard',
		fontWeight: '400',
		fontSize: 19,
		lineHeight: 28.5,
		color: Color.white
	}
})