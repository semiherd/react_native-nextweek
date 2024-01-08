import { StyleSheet } from 'react-native'
import { FontStyling } from '../../../../type/type.app'
import { Color } from '../../../../asset/constant/Color'

export const styles= (fontStyling:FontStyling) => StyleSheet.create({
	container:{
		alignSelf:'center',
		justifyContent: 'center'
	},
	text:{
		fontFamily: fontStyling.fontFamily || 'Lato',
		fontWeight: fontStyling.fontWeight || '700',
		fontSize: fontStyling.fontSize || 19,
		lineHeight: fontStyling.lineHeight || 22.8,
		color:  fontStyling.color || Color.oxfordblue,
	},
})


