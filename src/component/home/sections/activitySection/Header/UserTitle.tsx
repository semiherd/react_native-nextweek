import {Dimensions,StyleSheet} from 'react-native'
import {Color} from '../../../../../asset/constant/Color'
const {width}= Dimensions.get('window')

export const styles= StyleSheet.create({
	type:{
		fontFamily: 'Lato',
		fontWeight: '300',
		fontSize: 13,
		lineHeight: 15.6,
		color: Color.black,
		textAlign: 'center',
	},
	name:{
		textAlign: 'center',
		fontFamily: 'Lato',
		fontWeight: '500',
		fontSize: 14,
		lineHeight: 16.8,
		color: Color.black,
	},
})


