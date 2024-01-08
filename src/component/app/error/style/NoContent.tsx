import {StyleSheet} from 'react-native'
import {Color} from '../../../../asset/constant/Color'
import { fontStyles } from '../../../../asset/constant/FontStyles'

export const styles= StyleSheet.create({
	container:{
		borderRadius: 5,
		borderWidth: 0,
		alignSelf: 'center',
		padding: '3%',
	},
	text: fontStyles.Roster.Activity.noContent.text.style
})