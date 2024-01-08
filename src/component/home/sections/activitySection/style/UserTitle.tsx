import {StyleSheet} from 'react-native'
import { FontStyling } from '../../../../../type/type.app'

export const stylesName= (font:FontStyling) => StyleSheet.create({
	name:{
		...font,
		paddingLeft: '5%',
	}
})

export const stylesType= (font:FontStyling ) => StyleSheet.create({
	type:{
		...font,
		paddingHorizontal: '15%',
	}
})