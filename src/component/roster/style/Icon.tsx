import { StyleSheet } from 'react-native'
import { ImageCss } from '../../app/image/type.image'

export const iconStyles= (param:ImageCss) => StyleSheet.create({
	container:{
		width: param.width || 50,
		height: param.height || 50,
		borderRadius: param.borderRadius || 50,
		backgroundColor: param.backgroundColor || 'transparent',
		alignSelf: 'center',
		justifyContent: 'center',
		marginHorizontal: '1%',
	}
})