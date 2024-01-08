import { RosterState, RosterReducer} from './type';

export const rosterReducer = (prevState:RosterState, action:RosterReducer) => {
	switch (action.type) {
		case 'fetchActivity':
			return {
				...prevState,
				activity: action.payload.data
			}
		default:
			throw new Error(`Unknown action type: ${action.type}`);;
	}
 };