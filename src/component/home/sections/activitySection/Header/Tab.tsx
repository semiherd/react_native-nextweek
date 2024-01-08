import {Dimensions,StyleSheet} from 'react-native'
import {Color} from '../../../../../asset/constant/Color'

const {width,height}= Dimensions.get('window')

export const styles= StyleSheet.create({
	tabButton:{
		borderWidth:0.5,
		borderColor: Color.blue,
		height: height*0.1,
		marginHorizontal: 0,
		borderRadius: 13,
		width: width * 0.28,
	},
})


