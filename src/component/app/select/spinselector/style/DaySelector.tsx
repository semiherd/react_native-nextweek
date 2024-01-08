import { Dimensions,StyleSheet,Easing, } from 'react-native'

const {width,height}= Dimensions.get('window')

export const styles= StyleSheet.create({
	option:{
		textAlign: 'center',
		alignSelf: 'center',
		marginVertical: '3%',
		paddingVertical: '3%',
		borderWidth: 0,	
	}
})