import { StyleSheet, Dimensions} from 'react-native'
const { width, height } = Dimensions.get('window')
import { Color, ColorValues } from '../../../../asset/constant/Color'

const styles= (w:number,h:number,b:boolean,tb:boolean,bgColor:ColorValues,m:boolean,tl:number) => StyleSheet.create({
	container:{
		width: width * w,
		alignSelf: 'center',
		justifyContent: 'center',
		borderWidth: b ?0.5 :0,
		borderColor: bgColor ?Color.gray :Color.transparent,
		backgroundColor: bgColor ?bgColor :Color.transparent,
		borderRadius: 10,
		marginVertical: '1%',
		marginHorizontal: '1%',
		
	},
	text:{
		height: tl<(20*w)
			? height*h
			: m 
				? Math.round(tl/30)*h*height 
				: height * h,
		borderBottomColor: tb ?Color.gray :'transparent',
		borderBottomWidth: tb ?0.5 :0,
		width: width * w,
		borderRadius: 10,
		justifyContent: 'center',
		textAlign: 'center',
		alignSelf: 'center',
		marginVertical:'1%', 
		paddingLeft:'5%', 
		paddingRight:'5%', 
	}
})

export { styles }