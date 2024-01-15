import ShiftItemLayout from '../ShiftItemLayout'
import { Text, View, ViewStyle } from 'react-native'
import { handleMP } from '../../../../../styling'
import { Row } from '../../../../app/layout/Layout'
import { styles } from "../style/Label"
import { IconText } from '../../../../app/text/index'
import { profilePng } from '../../../../../asset/image/bottom-tab/index'
import { fontStyles } from '../../../../../asset/constant/FontStyles'
import { UserButton } from '../../../../app/button/index'
import ShiftContent from './ShiftContent'
import AvatarItem from './AvatarItem'
import { ShiftType } from '../../../../../type/type.shift'

const AvatarPreview= () => {
	const item= {
		_id: 'loading',
		name: '',
		image: profilePng
	}
	return (
		<View style={handleMP(`margin-top-15`) as ViewStyle}>
			<Row rowWidth={0.4} alignOption="space-around">
				<>
				<IconText
					key={"default"}
					icon={<AvatarItem {...item} />}
					text={<Text style={styles.label}>{""}</Text>}
					direction='column'
					align="center"
				/>
				</>
			</Row>
		</View>
	)
}
const ActionPreview= () => {
	return null
	
}
const LoaderPreview= () => {

	const item:ShiftType={
		_id: '',
		user: '...',
		manager: '',
		location: '',
		employeeType: 0,
		starting: new Date().toString(),
		ending: new Date().toString(),
		shiftSwapRequested: false,
		shiftSwapPending: false,
		shiftSwapAccepted: false,
		shiftEnded: false,
		date: '',
		__v: 0,
	}

	return (
		<View style={{ opacity: 0.25}}>
			<ShiftItemLayout 
				key={"loading"}
				action= {<ActionPreview />}
				content= {<ShiftContent {...item} font={fontStyles.Home.Shift.time.text.style} />}
				avatar= {<AvatarPreview  />}
			/>
		</View>
	)
	
}

export default LoaderPreview