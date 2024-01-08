import {ViewStyle,TextStyle,Pressable,Text} from 'react-native'
import { Dimensions } from 'react-native'
import { Color } from '../../../../../asset/constant/Color'
import { TextInCircle } from '../../../../app/text/index'

type propType= {
	onClickFn: () => void,
	text: string
}

const {width}= Dimensions.get('window')

const DeclineIcon=(
	props: propType
) => {
	
	const styles={
		container:{
			backgroundColor: Color.black76,
			width: width * 0.05,
			height: width * 0.05,
			borderRadius: 20,
		} as ViewStyle,
	}

	return (
		<Pressable 
			style={[
				styles.container
			]}
			onPress={props.onClickFn} 
		>
			<TextInCircle fontWeight={"800"} fontSize={15} size={24} text={props.text} borderWidth={1} borderColor={Color.black} color={Color.white} backgroundColor={Color.black} />
		</Pressable>
	)
}

export default DeclineIcon