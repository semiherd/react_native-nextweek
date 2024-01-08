import {Dimensions,StyleSheet} from 'react-native'
import {Color} from '../../../../../asset/constant/Color'
const {width}= Dimensions.get('window')

export const styles= (containerWidth:number) => StyleSheet.create({
	container:{
		position:'relative',
		top: containerWidth * -15,
		right: containerWidth * -200,
		width: containerWidth * 60,
		height: containerWidth * 60,
		padding: '1%',
		margin: '1%',
		alignSelf: 'center',
	},
	icon:{
		padding: '10%',
		margin: '1%',
		overflow: 'hidden',
		borderRadius: 10,
		fontWeight: '500',
		alignSelf: 'center',
		textAlign: 'center',
		backgroundColor: Color.black76,
		color: Color.white,
	},	
})


