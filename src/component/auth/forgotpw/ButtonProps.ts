import { fontStyles } from '../../../asset/constant/FontStyles'
import { NavButtonProps } from '../../../type/type.nav'
import { Color } from '../../../asset/constant/Color'

export const CancelProps:NavButtonProps={
	text:fontStyles.Auth.cancel.font.text,
	useBorder: true,
	font: fontStyles.Auth.cancel.font.style,
	width: 0.35,
	border: {
		borderRadius: 13,
		borderColor: Color.blue102_1,
		borderWidth: 2,
		borderBottomWidth: 0.5,
		borderBottomColor: Color.blue102_1
	}
}

export const UpdateProps:NavButtonProps={
	text:fontStyles.Auth.forgotpw.font.text,
	useBorder: true,
	font: fontStyles.Auth.forgotpw.font.style,
	width: 0.35,
	border: {
		borderRadius: 13,
		borderColor: Color.blue102_1,
		borderWidth: 2,
		borderBottomWidth: 0.5,
		borderBottomColor: Color.blue102_1
	}
}