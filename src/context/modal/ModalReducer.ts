import { CONTEXT_ACTIONS } from '../../asset/constant/Actions'
import { ModalState, ModalReducer} from './type.modal'

export const modalReducer = (prevState: ModalState, action: ModalReducer):ModalState => {
	switch (action.type) {
		case CONTEXT_ACTIONS.MODAL.INITIAL:
			return {
				...prevState,
				id: action.data.id,
				param: action.data.param
			};
		case CONTEXT_ACTIONS.MODAL.RESET:
			return {
				...prevState,
				id: null,
				param: null,
			};
		case CONTEXT_ACTIONS.MODAL.SET_INPUT:
			return {
				...prevState,
				param:{
					...prevState.param,
					...action.data
				}
			};
		default:
			return prevState;
	}
};