import { StyleSheet,Dimensions } from 'react-native'
import { Color } from '../../../asset/constant/Color'
import { FontStyling } from '../../../type/type.app'

const { height} = Dimensions.get('window')

const styles= (logoState:boolean) => StyleSheet.create({
	appName:{
		fontFamily: 'K2D' as FontStyling['fontFamily'],
		fontSize: 24,
		fontWeight: '800' as FontStyling['fontWeight'],
		lineHeight: 25,
		backgroundColor: Color.transparent,
		alignSelf: 'center',		
		color: logoState ?Color.transparent :Color.blue102_1,
		marginTop:height*0.05,
		marginBottom:height*0.03
	},
	logo:{
		alignSelf: 'center',
		top: height * 0.05,
	}
})
export { styles }