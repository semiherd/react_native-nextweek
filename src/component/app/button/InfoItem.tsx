import { Dimensions, View } from 'react-native'
import { UserButton} from './index'
import { Color } from '../../../asset/constant/Color'
import { Warning } from '../error/index'

const { width, height }= Dimensions.get('window')

const InfoItem= ({text,pressOk}:{text:string,pressOk:() => void}) => {
	
	return (
		<View style={{
			backgroundColor: Color.white,
			borderRadius: 10,
			padding: '2%',
			position: 'absolute',
			bottom: height*0.5,
			left: width* 0.15,
			width: width*0.7,
		}}>
				<Warning text={text} />
				<UserButton 
					useBorder={true}
					buttontext="ok"
					borderStyles={{
						borderRadius: 5,
						borderWidth: 1,
					}}
					fontStyles={{
						fontFamily: 'Lato',
						fontSize: 20,
						fontWeight: '600',
						backgroundColor: Color.white
					}}
					onClickFn={pressOk}
					onClickParam={{value: null}}
				/>
		</View>
	)
}
export default InfoItem