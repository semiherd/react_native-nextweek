import { fontStyles } from '../../../asset/constant/FontStyles'
import { NavButtonProps } from '../../../type/type.nav'

export const LogInProps:NavButtonProps={
	text:`Log In`,
	useBorder: true,
	font: fontStyles.Auth.login.font.style,
	width: 0.8,
	height: 0.08,
	border: {
		borderRadius: 13,
	}
}
export const ForgotPwProps:NavButtonProps={
	text:`Forgot Pw`,
	useBorder: false,
	font: fontStyles.Auth.SignIn.forgotPw.font.style,
	width: 0.8,
	height: 0.08,
	border: {
		borderRadius: 13,
	}
}