import { ReactChildren,FontStyling, BorderStyle } from './type.app'
import { UserUpdateParam } from './type.user'
import { Room } from '../component/message/type/type.message'

export type NavConProps= ReactChildren
export type StackList= 'MAIN' | 'AUTH' | 'SPLASH' 
export type BottomTabList= 'HOME' | 'PROFILE' | 'MESSAGE' | 'ROSTER'
export type Splash= 'Initial' | 'Api'

export type StackParams = {
	MAIN: {
		userId: string 
	}
	AUTH: undefined
	SPLASH: {
		type: Splash
	}
}

type UpdateField= { 
	field: UserUpdateParam 
}

export const BACK= { Back: 'PrevScreen' }

export const HomeStackParamList={
	...BACK,
	Home: undefined,
	ViewAll: undefined
}

export const AuthStackParamList = {
	...BACK,
	AuthHome: undefined,
  SignIn: undefined,
  VerifyEmail: undefined,
  SignUp: undefined
}


export const ProfileStackParamList = {
	...BACK,
	ProfileHome: undefined,
	ProfileSetting: undefined,
	Update: undefined
}

export const ChatStackParamList = {
	...BACK,
	Chatroom: {
		room: typeof '',
		title: typeof ''
	},
	Inbox: undefined,
}

export type AuthStackList= typeof AuthStackParamList
export type ChatStackList= typeof ChatStackParamList
export type HomeStackList= typeof HomeStackParamList
export type ProfileStackList= typeof ProfileStackParamList


export type AuthStackType= keyof AuthStackList 
export type ChatStackType= keyof ChatStackList 
export type HomeStackType= keyof HomeStackList 
export type ProfileStackType= keyof ProfileStackList
export type ProfileSettingStackType= 'Contact'|'Security'|'Personal'

export type StackGenericList<T>={
	[P in keyof T]: undefined
}

export type NavButtonProps= {
	text: string
	useBorder: boolean,
	font: FontStyling
	border: BorderStyle
	width: number
	height?: number
}
export type AsyncBool= () => Promise<boolean>
export type AsyncVoid= () => Promise<void>
export type AsyncReturn<T>= () => Promise<T>
export type OnNavFn= null | AsyncBool

