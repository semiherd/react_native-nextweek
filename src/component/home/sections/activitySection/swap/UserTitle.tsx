import { Text } from 'react-native'
import { Row } from '../../../../app/layout/Layout'
import { FontStyling } from '../../../../../type/type.app'
import { stylesName,stylesType } from '../style/UserTitle'

const UserTitle= ({text,styling}:{text:string[],styling:{name:FontStyling,type:FontStyling}}) => {
	console.log('test usertitle:',text)
	return (
		<Row rowWidth={0.5} alignOption="space-between">
			<>
				<Text style={stylesName(styling.name).name}>{text[0]===null ?'' :text[0]}</Text>
				<Text style={stylesType(styling.type).type}>{text[1]}</Text>
			</>
		</Row>
	)
}
export default UserTitle