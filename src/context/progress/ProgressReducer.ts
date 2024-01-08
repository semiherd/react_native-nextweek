import { ProgressReducer, ProgressState } from './type.progress';

export const progressReducer = (prevState: ProgressState, action: ProgressReducer):ProgressState => {
	switch (action.type) {
		case 'update_loading':
			return {
				...prevState,
				loading: {
					state: action.payload.state,
					description: action.payload.description
				},
			}		
		case 'update_error':
			return {
				...prevState,
				error: {
					state: action.payload.state,
					error: action.payload.error,
					description: action.payload.description
				},			
			}
		case 'reset_error':			
			return {
				...prevState,
				error: {
					state: false,
					error: null,
					description: ''
				}
			};
		case 'reset_loading':			
			return {
				...prevState,
				loading: {
					state: false,
					description: ''
				}
			};
		default:
			return prevState;
	}
}