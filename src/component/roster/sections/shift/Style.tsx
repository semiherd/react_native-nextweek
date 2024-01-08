import {StyleSheet} from 'react-native'
import { BorderStyle } from '../../../../type/type.app'

export const styles= (styling:BorderStyle) => StyleSheet.create({
	container:{
		...styling,
		marginHorizontal: '5%',
	}
})