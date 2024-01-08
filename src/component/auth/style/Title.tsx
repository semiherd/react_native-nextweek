import { StyleSheet,Dimensions } from 'react-native'
import { Color } from '../../../asset/constant/Color'
import { fontStyles } from '../../../asset/constant/FontStyles'
import { AuthStackType } from '../../../type/type.nav'

const {  SignIn, SignUp }= fontStyles.Auth
const { width,height} = Dimensions.get('window')

const styles= (version:number,name:AuthStackType) => StyleSheet.create({
	container:{
		width,
		height: height * 0.11,
		borderTopLeftRadius: version===0 ?0 :version===1 ?30 :0,
		borderTopRightRadius: version===0 ?0 :version===1 ?30 :0,
		backgroundColor: version===0 ?Color.transparent :Color.blue108
	},
	textContainer:{
		marginHorizontal: 
			version===0
				?	name==='SignIn'
					? '10%'
					: name==='SignUp'
						? '10%'
						: 0
				: version===1
					? name==='SignIn'
						?	'10%'
						: name==='SignUp'
							? '5%'
							: 0
					: 0,
		marginVertical: '2%',
		alignSelf: 
			version===0
				?	name==='SignIn'
					? 'flex-start'
					: name==='SignUp'
						? 'flex-start'
						: 'center'
				: version===1
					? name==='SignIn'
						?	'center'
						: name==='SignUp'
							? 'center'
							: 'center'
					: 'center',
	},
	title: 
		version===0
			?	name==='SignIn'
				? SignIn.title.font.style.v0
				: name==='SignUp'
					? SignUp.title.font.style.v0
					: {}	
			: version===1
				? name==='SignIn'
					?	SignIn.title.font.style.v1
					: name==='SignUp'
						? SignUp.title.font.style.v1
						: {}
				: {},
	text: 
		version===0
			?	name==='SignIn'
				? {
						marginTop: '1%',
						...SignIn?.description.font.style.v0
					}
				: name==='SignUp'
					? SignUp.description.font.style.v0
					: {}	
			: version===1
				? name==='SignUp'
					?	{
						textAlign: 'center',
						marginTop: '1%',
						...SignUp?.description.font.style.v1
					}
					: name==='SignIn'
						? {
							alignSelf:'center',
							...SignUp.description.font.style.v1
						}
						: {}
				: {}
})
export { styles }