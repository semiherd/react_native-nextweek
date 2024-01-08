import { StyleSheet,Dimensions } from 'react-native'
import { Color } from '../../../asset/constant/Color'
import { FontStyling } from '../../../type/type.app'
import { AuthStackType } from '../../../type/type.nav'

const { width, height} = Dimensions.get('window')

const stylesForm= (version:number,name: AuthStackType) => StyleSheet.create({
	container: {
		flex:1,
		backgroundColor: Color.white,
		borderTopRightRadius: version===1 ?30 :version===0 ?0 :0,
		borderTopLeftRadius: version===1 ?30 :version===0 ?0 :0,
	},
	text:{
		transform:[
			{ translateX: width*0.03}
		],
		alignSelf:'center',
	},
	login:{
		fontFamily: 'Lato' as FontStyling['fontFamily'],
		fontSize: 13,
		lineHeight: 22,
		fontWeight: '200' as FontStyling['fontWeight'],
		color: Color.black,
	}
})
export { stylesForm }