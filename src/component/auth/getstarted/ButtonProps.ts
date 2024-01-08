import { fontStyles } from '../../../asset/constant/FontStyles'
import { NavButtonProps } from '../../../type/type.nav'
import { Color } from '../../../asset/constant/Color'

export const GetStartedButton:NavButtonProps={
	text: fontStyles.Auth.GetStarted.navButton.font.text,
	useBorder: true,
	font: fontStyles.Auth.GetStarted.navButton.font.style,
	width: 0.8,
	border: {
		borderRadius: 13,
		borderColor: Color.blue102_1,
		borderWidth: 2,
		borderBottomWidth: 0.5,
		borderBottomColor: Color.blue102_1
	}
}