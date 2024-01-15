import {AuthReducer,AuthState} from './type.auth';
import { CONTEXT_ACTIONS } from '../../asset/constant/Actions'

export const userReducer = (prevState: AuthState, action: AuthReducer):AuthState => {
	switch (action.type) {
		case CONTEXT_ACTIONS.AUTH.SIGNIN.USER:
			return {
				...prevState,
				role: 'User',
				manager: null,
				user: action.payload.user,
				token: action.payload.token,
				refreshToken: action.payload.refreshToken
			}
		case CONTEXT_ACTIONS.AUTH.SIGNIN.MANAGER:
			return {
				...prevState,
				role: 'Manager',
				user: null,
				manager: action.payload.manager,
				token: action.payload.token,
				refreshToken: action.payload.refreshToken
			}
		case CONTEXT_ACTIONS.AUTH.SIGNOUT:
			return {
				...prevState,
				role: null,
				user: null,
				manager: null,
				token: null,
				refreshToken: null
			}
		case CONTEXT_ACTIONS.AUTH.RESTORE_TOKEN:
			return {
				...prevState,
				token: action.payload.token,
			}
		case CONTEXT_ACTIONS.USER.UPDATE:		
			return {
				...prevState,
				user: {
					...prevState.user,
					[action.payload.param.type]: action.payload.param.value
				}
			};
		default:
			return prevState;
	}
 };