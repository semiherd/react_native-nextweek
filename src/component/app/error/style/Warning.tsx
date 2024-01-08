import {StyleSheet} from 'react-native'
import {Color} from '../../../../asset/constant/Color'
import { fontStyles } from '../../../../asset/constant/FontStyles'

export const styles= StyleSheet.create({
	container:{
		width: '70%',
		alignSelf: 'center',
		paddingVertical: '1%',
		marginVertical:'1%',
	},
	text: {
		textAlign:'center',
		fontFamily: 'Mazzard',
		fontSize: 15,
		fontWeight: '500',
		lineHeight: 21,
		color: Color.black41
	}
})