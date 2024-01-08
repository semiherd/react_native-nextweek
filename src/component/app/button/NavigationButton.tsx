import { NavButtonProps } from '../../../type/type.nav'
import { styles } from './style/NavigationButton'
import { View, Text } from 'react-native'

const NavigationButton= (
	props:{styling: NavButtonProps}
) => {
	const { styling }= props
	const { font, border, useBorder, width, height, text }= styling
	
	return <View style={[
		styles(font,border,useBorder,width,height).center,
		styles(font,border,useBorder,width,height).border,
		styles(font,border,useBorder,width,height).container
	]}>
			<Text style={[styles(font,border,useBorder,width,height).text]}>{text}</Text>
		</View>
	
}

export default NavigationButton