import { CONTEXT_ACTIONS, ModalActionKeys, ModalActionVals } from '../../asset/constant/Actions'

export type ModalId= 'create-request'
export type ModalName= 'myrequest' | 'absence' | 'blocker'

export type ModalParam<T>={
	type: ModalName | null
	input?: T
}

export type ModalState<T>= {
	id: ModalId | null
	param: ModalParam<T> | null
}

export type ModalAPI<T>= {
	close: () => void
	open: ( params: BaseApiParam<T>) => void
}

export type BaseApiParam<T>={
	id: ModalId | null
	param: ModalParam<T>
}

type RESET= {
	type: typeof CONTEXT_ACTIONS.MODAL.RESET
}
type INITIAL<T>= {
	type: typeof CONTEXT_ACTIONS.MODAL.INITIAL
	data: BaseApiParam<T> & {}
}
type SETINPUT<T>= {
	type: typeof CONTEXT_ACTIONS.MODAL.SET_INPUT
	data: BaseApiParam<T> & {}
}
type test= typeof CONTEXT_ACTIONS.MODAL

export type ModalReducer<T>= SETINPUT<T> | INITIAL<T> | RESET