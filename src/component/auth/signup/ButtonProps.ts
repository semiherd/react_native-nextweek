import { fontStyles } from '../../../asset/constant/FontStyles'
import { NavButtonProps } from '../../../type/type.nav'
import { Color } from '../../../asset/constant/Color'
import { FontStyling } from '../../../type/type.app'

export const VerifyButtonProps:NavButtonProps={
	text: fontStyles.Auth.create.font.text,
	useBorder: true,
	font: fontStyles.Auth.create.font.style,
	width: 0.8,
	height: 0.08,
	border: {
		borderRadius: 13,
	}
}

export const LoginButton:NavButtonProps={
	text: 'Login',
	useBorder: false,
	font: {
		fontFamily: 'Lato' as FontStyling['fontFamily'],
		fontSize: 14,
		lineHeight: 22,
		fontWeight: '500' as FontStyling['fontWeight'],
		color: Color.blue,
	},
	width: 0.15,
	height: 0.05,
	border:{
	
	}
}

export const InputText0:FontStyling={
		fontFamily: 'Lato' as FontStyling['fontFamily'],
		fontSize: 20,
		lineHeight: 22,
		fontWeight: '300' as FontStyling['fontWeight'],
		color: Color.black,
}

export const InputText1:FontStyling= {
		fontFamily: 'Lato' as FontStyling['fontFamily'],
		fontSize: 20,
		lineHeight: 22,
		fontWeight: '300' as FontStyling['fontWeight'],
		color: Color.black,
}
