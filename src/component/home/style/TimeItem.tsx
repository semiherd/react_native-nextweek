import { StyleSheet } from 'react-native'
import { FontStyling } from '../../../type/type.app'

export const styles= (font:FontStyling) => StyleSheet.create({
	text:{
		...font,
		alignSelf: 'center',
		marginHorizontal: '3%',
	},
})


