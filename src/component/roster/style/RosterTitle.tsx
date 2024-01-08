import { StyleSheet } from 'react-native'
import { FontStyling } from '../../../type/type.app'
import { Color } from '../../../asset/constant/Color'

export const styles= (param:FontStyling) => StyleSheet.create({
	text:{
		fontFamily: param.fontFamily || 'Poppins',
		fontWeight: param.fontWeight || '500',
		fontSize: param.fontSize || 18,
		lineHeight: param.lineHeight || 27,
		color: param.color || Color.black67,
		textAlign: 'center',
		alignSelf: 'center',
	}
})