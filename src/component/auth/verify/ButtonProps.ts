import { NavButtonProps } from '../../../type/type.nav'
import { fontStyles } from '../../../asset/constant/FontStyles'

export const VerifyButtonProps:NavButtonProps={
	text: fontStyles.Auth.Verify.verifyButton.font.text,
	useBorder: true,
	font: fontStyles.Auth.Verify.verifyButton.font.style,
	width: 0.8,
	height: 0.08,
	border: {
		borderRadius: 13,
	}
}

export const BackHomeButton:NavButtonProps={
	text: 'Back',
	useBorder: false,
	font: fontStyles.Auth.Verify.resend.font.style,
	width: 0.2,
	height: 0.05,
	border:{}
}