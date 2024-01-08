import {Dimensions,StyleSheet} from 'react-native'
import {Color} from '../../../../../asset/constant/Color'

const {width,height}= Dimensions.get('window')

export const styles= (state:boolean) => StyleSheet.create({
	tabButton:{
		backgroundColor: state?Color.blue:'transparent',
		height: height*0.1,
		marginHorizontal: 0,
		marginVertical: '0%',
		borderRadius: state?13:0,
		width: width * 0.28,
	},
})


