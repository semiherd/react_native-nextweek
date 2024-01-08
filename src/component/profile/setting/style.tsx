import { StyleSheet } from 'react-native'
import { Color } from '../../../asset/constant/Color'
import { FontStyling } from '../../../type/type.app'

export const styles= StyleSheet.create({
		container:{
			containerWidth: 0.75,
			bgColor: Color.transparent,
			containerHeight: 0.6,
			borderColor: Color.black,
		},
		title: {
			fontFamily: 'Lato' as FontStyling['fontFamily'],
			fontSize: 35,
			fontWeight: '700' as FontStyling['fontWeight'],
			lineHeight: 42,
			color: Color.blue
		},
		value:{
			fontFamily: 'Lato' as FontStyling['fontFamily'],
			fontSize: 18,
			fontWeight: '300' as FontStyling['fontWeight'],
			lineHeight: 21,
			color: Color.blue
		}
})