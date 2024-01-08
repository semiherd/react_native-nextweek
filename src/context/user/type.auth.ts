import { User,Manager,Admin } from './type.user'
import { UserUpdateParam } from '../../type/type.user'
import { CONTEXT_ACTIONS } from '../../asset/constant/Actions'
import { ApiResponseVals } from '../../type/type.api'

export type Roles= 'Manager' | 'User'

type UserObj={
	user: User
}
type ManagerObj={
	manager: Manager
}

export type AuthState=  {
	useMocked: boolean
	token: string | null
	role: null | 'User' | 'Manager'
	loading: boolean
	user: User | null
	manager: Manager | null
	refreshToken: string | null
}

export type SignInParam= LoginBase & { role:Roles }


export type AuthApi={
	handleSignInDispatch: (data:SignInResponse) => Promise<boolean>
	handleSignIn: ({role,email,password}:SignInParam) => Promise<ApiResponseVals>
	signIn: ({role,email,password}:SignInParam) => Promise<SignInResponse>
	signUp:({role,email,password}:SignInParam) => Promise<SignUpResponse>
	updateUser: ( id: User['_id'],param: { type: UserUpdateParam, value: string} ) => Promise<ApiResponseVals>
	verifyCode: (code: Api_AuthVerify_Param) => Promise<Api_AuthVerify>
	getVC: () => Promise<Api_AuthVC>
	onPwUpdate: (code: Api_AuthPwUpdate_Param) => Promise<Api_AuthPwUpdate>
	signOut: () => Promise<Api_AuthSignOut>
}

type UpdateUser= {
	type: typeof CONTEXT_ACTIONS.USER.UPDATE
	payload: {
		id: User['_id'],
		param: { type: UserUpdateParam, value: string}
	}
}

type SignOutUser= {
	type: typeof CONTEXT_ACTIONS.AUTH.SIGNOUT
	payload: {
		user: null
		manager: null
		role: null
		token: null
		refreshToken: null
	}
}

type SignInUser= {
	type: typeof CONTEXT_ACTIONS.AUTH.SIGNIN.USER
	payload: {
		user: User|null
		token: string|null
		refreshToken: string|null
	}
}

type SignInManager= {
	type: typeof CONTEXT_ACTIONS.AUTH.SIGNIN.MANAGER
	payload: {
		manager: Manager|null
		token: string|null
		refreshToken: string|null
	}
}

export type AuthReducer= SignOutUser | SignInUser | SignInManager | UpdateUser 

// AUTH
export type LoginBase={
	"email": string
	"password": string
}

//SIGNIN

export type SignInResponse= Api_AuthManagerSignIn|Api_AuthUserSignIn|null

export type Api_AuthUserSignIn_Param={
	"user": User
	"email": string
}

export type Api_AuthUserSignIn={
	"user": User
	"token": string
	"refresh_token": string
}

export type Api_AuthManagerSignIn_Param= LoginBase
export type Api_AuthManagerSignIn= {
	"manager": Manager
	"token": string
	"refresh_token": string
}

//SIGNUP
export type SignUpResponse= Api_AuthUserSignUp|Api_AuthManagerSignUp|null

export interface Api_AuthUserSignUp_Param extends LoginBase{
	"name": string
	"role": Roles
}
export type Api_AuthUserSignUp={
	"user": string
}

export interface Api_AuthManagerSignUp_Param extends LoginBase{
	"name": string
}
export type Api_AuthManagerSignUp={
	"manager": string
}

//VERIFY

export type Api_AuthVerify_Param= number[]
export type Api_AuthVerify= ApiResponseVals

//PASSWORD-UPDATE

export type Api_AuthPwUpdate_Param= {
	password: string
}
export type Api_AuthPwUpdate= ApiResponseVals

//SIGNOUT

export type Api_AuthSignOut_Param= {
	id: User['_id']
}
export type Api_AuthSignOut= ApiResponseVals

//Get-Verification-Code

export type Api_AuthVC_Param= {
	id:User['_id']
}

export type Api_AuthVC= ApiResponseVals
